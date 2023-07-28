import { useState } from 'react';
import { useStore } from '../../../hooks/useStore';
import { Link } from 'react-router-dom';

function AlbumItem({ album }) {
  const [userIsDeleting, setUserIsDeleting] = useState(false);

  const { deleteAlbum } = useStore();

  const handleDelete = async () => {
    setUserIsDeleting(true);
  };

  const handleDeleteCancel = () => {
    setUserIsDeleting(false);
  };

  const handleDeleteConfirm = async () => {
    deleteAlbum(album.id);
  };

  return (
    <li key={album.id}>
      <div>
        <h3>
          <strong>Título:</strong>
          {album.name}
        </h3>
        <h4>
          <strong>Ano:</strong>
          {album.year}
        </h4>
        <h4>
          <strong>Faixas:</strong>
          {album.tracks?.length ?? 0}
        </h4>
      </div>
      <div>
        {userIsDeleting ? (
          <div className="flex col">
            <p>Tem certeza que deseja deletar este album?</p>

            <div className="flex justify-center">
              <button className="red" onClick={handleDeleteConfirm}>
                Sim
              </button>
              <button onClick={handleDeleteCancel}>Cancelar</button>
            </div>
          </div>
        ) : (
          <>
            <Link to={`/album/${album.id}`}>
              <button className="blue">👁️‍🗨️ Ver detalhes</button>
            </Link>
            <button className="red" type="button" onClick={handleDelete}>
              🗑️ Remover
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default AlbumItem;
