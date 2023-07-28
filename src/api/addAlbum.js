import { api } from '.';

export async function addAlbum(album) {
  const { data } = await api.post('/album', album);

  return data;
}
