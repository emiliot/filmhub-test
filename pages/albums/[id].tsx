import { NextPage } from 'next'
import Image from 'next/image'
import dayjs from 'dayjs'

import { Layout } from '../../components/layout'
import { Album } from '../../types/album'

type AlbumPageProps = {
  album: Album
}

export async function getServerSideProps({ query }: any) {
  let album = {}
  try {
    album = JSON.parse(query.data)
  } catch (e) {
    console.error('Error parsing album data', e)
  }

  return {
    props: {
      album,
    },
  }
}

const AlbumPage: NextPage<AlbumPageProps> = (props: AlbumPageProps) => {
  const { album } = props
  const releaseDate = dayjs(album.releaseDate, 'YYYY-MM-DD').format('MMMM YYYY')
  return (
    <Layout>
      <div className="flex flex-col items-center rounded bg-slate-200">
        <h2 className="mb-4 mt-4">
          <a href={album.artistUrl} className="text-4xl text-blue-600">
            {album.artistName}
          </a>
        </h2>
        <Image
          priority
          src={album.artworkUrl100}
          height={200}
          width={200}
          alt={`${album.name || ''} image`}
        />
        <div className="mt-2 mb-4 flex flex-col">
          <h3 className="text-md text-ellipsis font-semibold">{album.name}</h3>
          <h4 className="text-ellipsis text-sm">{releaseDate}</h4>
          <div className="flex flex-row">
            {album.genres.map((genre, index) => (
              <span
                className={`text-sm ${index > 0 ? 'ml-1' : ''}`}
                key={genre.genreId}
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AlbumPage
