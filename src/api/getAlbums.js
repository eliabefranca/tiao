import { api } from '.';

export async function getAlbums({ keyword, page, limit }) {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append('keyword', keyword);
  urlSearchParams.append('page', page);
  urlSearchParams.append('limit', limit);

  const { data } = await api.get(`/album?${urlSearchParams.toString()}`);

  return data;
}
