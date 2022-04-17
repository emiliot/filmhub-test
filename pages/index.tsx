import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { AlbumsByGenre, GenreById, type Album } from '../types/album'
import {
  getAlbumsByGenre,
  getGenreById,
  handleAlbumsResponse,
} from '../utils/album'
import { Genres } from '../components/genres'

const API_URL =
  'https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json'

export async function getServerSideProps() {
  const res = await fetch(API_URL)
  const data = await res.json()
  const { albums, albumsByGenre, genreById } = handleAlbumsResponse(data)

  return { props: { albums, albumsByGenre, genreById } }
}

export type HomeProps = {
  albums: Album[]
  albumsByGenre: AlbumsByGenre
  genreById: GenreById
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const { albumsByGenre, genreById } = props
  return (
    <div className="flex min-h-screen flex-col py-2">
      <Head>
        <title>Filmhub Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col px-20 py-20">
        <h1 className="text-4xl">Filmhub Music</h1>
        <Genres albumsByGenre={albumsByGenre} genreById={genreById} />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
