import { AlbumsByGenre, GenreById } from '../types/album'
import { Genre } from './genre'

type GenresProps = {
  albumsByGenre: AlbumsByGenre
  genreById: GenreById
}

export function Genres(props: GenresProps) {
  const { albumsByGenre, genreById } = props
  console.log(genreById)
  return (
    <>
      {Object.keys(genreById)
        .sort(
          (genreA, genreB) =>
            albumsByGenre[genreB].length - albumsByGenre[genreA].length
        )
        .map((genreId) => {
          return (
            <Genre
              key={genreId}
              genre={genreById[genreId]}
              albums={albumsByGenre[genreId]}
            />
          )
        })}
    </>
  )
}
