import { useState } from 'react';
import { useStore } from '../../../hooks/useStore';

function AddAlbum({ hide }) {
  const [name, setName] = useState('');
  const [year, setYear] = useState(1980);

  const { addAlbum } = useStore();

  const handleSubmit = (event) => {
    event.preventDefault();

    addAlbum({
      name,
      year,
    });

    hide();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome do Album</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="year">Ano de Lançamento</label>
        <input
          id="year"
          type="number"
          value={year}
          onChange={(event) => setYear(event.target.value)}
          min={1900}
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

export default AddAlbum;
