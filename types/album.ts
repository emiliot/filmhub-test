export type Genre = {
  genreId: string
  name: string
  url: string
}

export type Album = {
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
