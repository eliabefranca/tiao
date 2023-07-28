import { useState } from 'react';
import { useStore } from '../../../hooks/useStore';

function SearchInput() {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const { searchAlbum } = useStore();

  const handleSubmit = (event) => {
    event.preventDefault();

    searchAlbum(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <input
            id="searchInput"
            type="text"
            value={search}
            onChange={handleChange}
          />
          <button type="submit">🔎 Pesquisar</button>
        </div>
      </div>
    </form>
  );
}

export default SearchInput;
