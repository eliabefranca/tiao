import { useStore } from '../../../hooks/useStore';
import AlbumItem from './AlbumItem';

function AlbumList() {
  const { isLoadingAlbums, albumsData } = useStore();

  if (isLoadingAlbums) return <div>Carregando...</div>;

  if (albumsData.items?.length === 0) {
    return <div className="text-center">Nenhum album encontrado.</div>;
  }

  return (
    <div>
      <ul>
        {albumsData.items?.map((album) => (
          <AlbumItem key={album.id} album={album} />
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
