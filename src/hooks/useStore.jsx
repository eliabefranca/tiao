import { createContext, useContext, useState } from 'react';
import { getAlbums } from '../api/getAlbums';
import { deleteAlbum as apiDeleteAlbum } from '../api/deleteAlbum';
import { deleteTrack as apiDeleteTrack } from '../api/deleteTrack';
import { addTrack as apiAddTrack } from '../api/addTrack';
import { addAlbum as apiAddAlbum } from '../api/addAlbum';
import { toast } from 'react-toastify';

const storeContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [albumsData, setAlbumsData] = useState({
    currentPage: 1,
    items: null,
  });
  const [isLoadingAlbums, setIsLoadingAlbums] = useState(false);
  const searchAlbum = async (search) => {
    setIsLoadingAlbums(true);
    const response = await getAlbums({
      keyword: search,
      limit: 10,
      page: 1,
    });

    setAlbumsData({
      currentPage: response.current_page,
      items: response.data,
    });
    setIsLoadingAlbums(false);
  };

  const addAlbum = async (album) => {
    try {
      const albumData = await apiAddAlbum(album);

      console.log(albumData);

      setAlbumsData((prevState) => ({
        ...prevState,
        items: [albumData, ...(prevState.items ?? [])],
      }));

      toast.success('Album adicionado com sucesso!');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  const deleteAlbum = async (id) => {
    await apiDeleteAlbum(id);

    setAlbumsData((prevState) => ({
      ...prevState,
      items: prevState.items.filter((album) => album.id !== id),
    }));
  };

  const addTrack = async (track) => {
    try {
      const trackData = await apiAddTrack(track);

      setAlbumsData((prevState) => ({
        ...prevState,
        items: prevState.items.map((album) => {
          if (album.id === track.album_id) {
            return {
              ...album,
              tracks: [...album.tracks, trackData],
            };
          }

          return album;
        }),
      }));

      toast.success('Faixa adicionada com sucesso!');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  const deleteTrack = async (id) => {
    await apiDeleteTrack(id);

    setAlbumsData((prevState) => ({
      ...prevState,
      items: prevState.items.map((album) => ({
        ...album,
        tracks: album.tracks.filter((track) => track.id !== id),
      })),
    }));
  };

  const getStoreAlbumById = (id) => {
    return albumsData.items?.find((album) => album.id === id);
  };

  return (
    <storeContext.Provider
      value={{
        searchAlbum,
        isLoadingAlbums,
        albumsData,
        deleteAlbum,
        getStoreAlbumById,
        deleteTrack,
        addTrack,
        addAlbum,
      }}
    >
      {children}
    </storeContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(storeContext);

  if (!context) {
    throw new Error('useStore must be used within a StoreProvider.');
  }

  return context;
};
