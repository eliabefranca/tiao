import { useParams, useNavigate, Link } from 'react-router-dom';
import { useStore } from '../../hooks/useStore';
import { useEffect, useMemo, useState } from 'react';
import Track from './component/Track';
import AddTrack from './component/AddTrack';

export const AlbumPage = () => {
  const { id } = useParams();
  const { getStoreAlbumById } = useStore();
  const navigate = useNavigate();
  const [userIsAddingTrack, setUserIsAddingTrack] = useState(false);

  const album = useMemo(() => {
    return getStoreAlbumById(Number(id));
  }, [id, getStoreAlbumById]);

  const handleAddTrack = () => {
    setUserIsAddingTrack(true);
  };

  const cancelAdd = () => setUserIsAddingTrack(false);

  useEffect(() => {
    if (!album) {
      return navigate('/404');
    }
  }, [album, navigate]);

  if (!album) return null;

  return (
    <div>
      <div className="flex justify-between gap-2">
        <h1>💽 {album.name}</h1>
        <Link to="/">
          <h3>🔙 Voltar</h3>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <h2>🎵 Faixas</h2>
        <button className="green" onClick={handleAddTrack}>
          ➕ Adicionar Faixa
        </button>
      </div>

      {userIsAddingTrack ? (
        <AddTrack albumId={Number(id)} hide={cancelAdd} />
      ) : (
        <>
          {album.tracks.length === 0 && (
            <p>Este album ainda não possui nenhuma faixa.</p>
          )}

          <ul>
            {album.tracks.map((track) => (
              <Track key={track.id} track={track} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
