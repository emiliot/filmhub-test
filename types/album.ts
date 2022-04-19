export type Genre = {
  genreId: string
  name: string
  url: string
}

export type Album = {
  id: string
  artistId: string
  artistName: string
  artistUrl: string
  artworkUrl100: string
  name: string
  releaseDate: string
  url: string
  genres: Genre[]
}

export type AlbumApiResponse = {
  feed: {
    results: Album[]
  }
}

export type ReducedAlbum = {
  releaseDate: string
  artistName: string
  artistUrl: string
  artworkUrl100: string
  name: string
  genres: String[]
}

export type GenreById = Record<string, Genre>
export type AlbumsByGenre = Record<string, Album[]>
