import {
  type AlbumApiResponse,
  Album,
  Genre,
  AlbumsByGenre,
  GenreById,
  ReducedAlbum,
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

export function getFilteredAlbumsByGenre(
  albumsByGenre: AlbumsByGenre,
  searchCriteria: string
): AlbumsByGenre {
  const filteredAlbumsByGenre: AlbumsByGenre = {}

  for (const [genreId, albums] of Object.entries(albumsByGenre)) {
    const nextAlbums = albums.filter((album) =>
      album.name.toLowerCase().includes(searchCriteria.toLowerCase())
    )
    if (nextAlbums.length > 0) {
      filteredAlbumsByGenre[genreId] = nextAlbums
    }
  }

  return filteredAlbumsByGenre
}

export function getLimitedChars(input: string, limit: number): string {
  return input.length > 30 ? `${input.slice(0, 30)}...` : input
}

export function getReducedAlbum(album: Album): ReducedAlbum {
  return {
    releaseDate: album.releaseDate,
    artistUrl: album.artistUrl,
    artistName: getLimitedChars(album.artistName, 30),
    artworkUrl100: album.artworkUrl100,
    name: getLimitedChars(album.name, 30),
    genres: album.genres?.map((genre) => getLimitedChars(genre.name, 15)),
  }
}
