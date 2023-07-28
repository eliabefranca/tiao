import { useState } from 'react';
import { useStore } from '../../../hooks/useStore';

function AddTrack({ albumId, hide }) {
  const [number, setNumber] = useState(0);
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState(180);

  const { addTrack } = useStore();

  const handleSubmit = (event) => {
    event.preventDefault();

    addTrack({
      album_id: albumId,
      number,
      title,
      duration,
    });

    setNumber(0);
    setTitle('');
    setDuration(180);
    hide();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="number">Número</label>
        <input
          id="number"
          type="number"
          value={number}
          onChange={(event) => setNumber(Number(event.target.value))}
        />
      </div>

      <div>
        <label htmlFor="duration">Duração (em segundos)</label>
        <input
          id="duration"
          type="number"
          value={duration}
          onChange={(event) => setDuration(Number(event.target.value))}
        />
      </div>

      <div className="flex row justify-end">
        <button className="white" type="button" onClick={hide}>
          Cancelar
        </button>

        <button className="green" type="submit">
          🪄 Criar
        </button>
      </div>
    </form>
  );
}

export default AddTrack;
