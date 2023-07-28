import { api } from '.';

export function deleteAlbum(id) {
  return api.delete(`/album/${id}`);
}
