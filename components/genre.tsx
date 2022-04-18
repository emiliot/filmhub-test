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
      <h2 className="mb-4 text-xl md:text-2xl">{genre.name}</h2>
      <div className="flex flex-row flex-nowrap overflow-scroll">
        {albums.map((album, key) => (
          <AlbumComponent album={album} key={key} />
        ))}
      </div>
    </div>
  )
}
