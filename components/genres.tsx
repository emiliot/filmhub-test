import { AlbumsByGenre, GenreById } from '../types/album'
import { Genre } from './genre'

type GenresProps = {
  albumsByGenre: AlbumsByGenre
  genreById: GenreById
}

export function Genres(props: GenresProps) {
  const { albumsByGenre, genreById } = props
  return (
    <>
      {Object.keys(genreById)
        .filter(
          (genreId) =>
            albumsByGenre[genreId] && albumsByGenre[genreId].length > 0
        )
        .sort((genreA, genreB) => {
          if (albumsByGenre[genreA] && albumsByGenre[genreB])
            return albumsByGenre[genreB].length - albumsByGenre[genreA].length
          else if (albumsByGenre[genreA]) return -1
          else return 1
        })
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
