import type { NextPage } from 'next'

import { AlbumsByGenre, GenreById, type Album } from '../types/album'
import { handleAlbumsResponse } from '../utils/album'
import { Genres } from '../components/genres'
import { Layout } from '../components/layout'

export async function getServerSideProps() {
  const API_URL =
    'https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json'
  try {
    const res = await fetch(API_URL)
    const data = await res.json()
    const { albums, albumsByGenre, genreById } = handleAlbumsResponse(data)

    return { props: { albums, albumsByGenre, genreById } }
  } catch (error) {
    console.error(error)

    return { props: { albums: [], albumsByGenre: {}, genreById: {} } }
  }
}

export type HomeProps = {
  albums: Album[]
  albumsByGenre: AlbumsByGenre
  genreById: GenreById
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const { albumsByGenre, genreById } = props
  return (
    <Layout>
      <h1 className="mb-10 text-3xl md:text-5xl">Filmhub Music</h1>
      <Genres albumsByGenre={albumsByGenre} genreById={genreById} />
    </Layout>
  )
}

export default Home
