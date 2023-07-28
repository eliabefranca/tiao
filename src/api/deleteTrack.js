import { api } from '.';

export function deleteTrack(id) {
  return api.delete(`/track/${id}`);
}
