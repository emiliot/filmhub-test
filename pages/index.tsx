import type { NextPage } from 'next'
import { useState, useEffect } from 'react'

import { AlbumsByGenre, GenreById, type Album } from '../types/album'
import { handleAlbumsResponse, getFilteredAlbumsByGenre } from '../utils/album'
import { Genres } from '../components/genres'
import { Layout } from '../components/layout'
import { Header } from '../components/header'

export async function getServerSideProps() {
  const API_URL =
    'https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json'
  try {
    const res = await fetch(API_URL)
    const data = await res.json()
    const { albums, albumsByGenre, genreById } = handleAlbumsResponse(data)

    return { props: { albums, albumsByGenre, genreById } }
  } catch (error) {
    console.error('Error querying music api', error)

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
  const [searchCriteria, setSearchCriteria] = useState('')
  const [filteredAlbumsByGenre, setFilteredAlbumsByGenre] =
    useState(albumsByGenre)

  useEffect(() => {
    if (searchCriteria) {
      const filteredAlbums = getFilteredAlbumsByGenre(
        albumsByGenre,
        searchCriteria
      )

      setFilteredAlbumsByGenre(filteredAlbums)
    } else {
      setFilteredAlbumsByGenre(albumsByGenre)
    }
  }, [searchCriteria])

  return (
    <Layout>
      <Header
        onSearchChange={(criteria) => {
          setSearchCriteria(criteria)
        }}
      />
      <Genres albumsByGenre={filteredAlbumsByGenre} genreById={genreById} />
    </Layout>
  )
}

export default Home
