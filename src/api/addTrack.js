import { api } from '.';

export async function addTrack(track) {
  const { data } = await api.post('/track', track);

  return data;
}
