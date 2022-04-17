import { Album, Genre } from '../types/album'
import { Album as AlbumComponent } from './album'

type GenreProps = {
  albums: Album[]
  genre: Genre
}

export function Genre(props: GenreProps) {
  const { genre, albums } = props
  return (
    <div>
      <h2>{genre.name}</h2>
      {albums.map((album, key) => (
        <AlbumComponent album={album} key={key} />
      ))}
    </div>
  )
}
