import { type AlbumApiResponse, Album, Genre } from '../types/album'

export function handleAlbumsResponse(response: AlbumApiResponse): Album[] {
  return response.feed.results
}
