import { useState } from 'react';
import { useStore } from '../../../hooks/useStore';

const formatSeconds = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  let secondsLeft = seconds % 60;
  secondsLeft = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;

  return `${minutes}:${secondsLeft}`;
};

function Track({ track }) {
  const [userIsDeleting, setUserIsDeleting] = useState(false);

  const { deleteTrack } = useStore();

  const handleDelete = async () => {
    setUserIsDeleting(true);
  };

  const handleDeleteCancel = () => {
    setUserIsDeleting(false);
  };

  const handleDeleteConfirm = async () => {
    deleteTrack(track.id);
  };

  return (
    <li>
      <div>
        <h3>
          <strong>Nome da Faixa:</strong>
          {track.title}
        </h3>
        <h4>
          <strong>Duração: </strong>
          {formatSeconds(track.duration)}
        </h4>
      </div>

      {userIsDeleting ? (
        <div className="flex col">
          <p>Tem certeza que deseja deletar esta faixa?</p>

          <div className="flex justify-center">
            <button className="red" onClick={handleDeleteConfirm}>
              Sim
            </button>
            <button onClick={handleDeleteCancel}>Cancelar</button>
          </div>
        </div>
      ) : (
        <>
          <button className="red" type="button" onClick={handleDelete}>
            🗑️ Remover
          </button>
        </>
      )}
    </li>
  );
}

export default Track;
