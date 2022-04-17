import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { AlbumsByGenre, GenreById, type Album } from '../types/album'
import { handleAlbumsResponse } from '../utils/album'

const API_URL =
  'https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json'

export async function getServerSideProps() {
  const res = await fetch(API_URL)
  const data = await res.json()
  const albums = handleAlbumsResponse(data)

  return { props: { albums } }
}

export type HomeProps = {
  albums: Album[]
  albumsByGenre: AlbumsByGenre
  genreById: GenreById
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Filmhub Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        Filmhub Music
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
