import { useState } from 'react';
import AlbumList from './components/AlbumList';
import SearchInput from './components/SearchInput';
import AddAlbum from './components/AddAlbum';

export function Home() {
  const [userIsAddingAlbum, setUserIsAddingAlbum] = useState(false);

  const handleAddAlbum = () => {
    setUserIsAddingAlbum(true);
  };

  const hide = () => setUserIsAddingAlbum(false);

  return (
    <div>
      <h1>Home</h1>
      <div className="flex gap-2 items-center">
        <h2>{userIsAddingAlbum ? 'Adicionar' : 'Pesquise por um'} álbum</h2>
        <button className="green" onClick={handleAddAlbum}>
          ➕ Adicionar Album
        </button>
      </div>

      {userIsAddingAlbum ? (
        <AddAlbum hide={hide} />
      ) : (
        <>
          <SearchInput />
          <AlbumList />
        </>
      )}
    </div>
  );
}
