import {
  type AlbumApiResponse,
  Album,
  Genre,
  AlbumsByGenre,
  GenreById,
} from '../types/album'

export function getAlbumsByGenre(albums: Album[]): AlbumsByGenre {
  return albums.reduce((albumsByGenre, nextAlbum) => {
    nextAlbum.genres.forEach((genre: Genre) => {
      if (albumsByGenre[genre.genreId]) {
        albumsByGenre[genre.genreId].push(nextAlbum)
      } else {
        albumsByGenre[genre.genreId] = [nextAlbum]
      }
    })

    return albumsByGenre
  }, {} as AlbumsByGenre)
}

export function getGenreById(albums: Album[]): GenreById {
  return albums.reduce((genreById, nextAlbum) => {
    nextAlbum.genres.forEach((genre: Genre) => {
      if (!genreById[genre.genreId]) {
        genreById[genre.genreId] = genre
      }
    })

    return genreById
  }, {} as GenreById)
}

export function handleAlbumsResponse(response: AlbumApiResponse): {
  albums: Album[]
  albumsByGenre: AlbumsByGenre
  genreById: GenreById
} {
  const albums = response.feed.results
  const albumsByGenre = getAlbumsByGenre(albums)
  const genreById = getGenreById(albums)

  return { albums, albumsByGenre, genreById }
}
