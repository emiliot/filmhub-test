import { Album } from '../types/album'

type AlbumProps = {
  album: Album
}

export function Album(props: AlbumProps) {
  const { album } = props
  return <div>{album.name}</div>
}
