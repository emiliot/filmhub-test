import Image from 'next/image'
import Link from 'next/link'

import { Album } from '../types/album'
import { getReducedAlbum } from '../utils/album'
import styles from './album.module.css'

type AlbumProps = {
  album: Album
}

export function Album(props: AlbumProps) {
  const { album } = props
  return (
    <div className={styles.container}>
      <Link
        href={`/albums/${album.id}?data=${encodeURI(
          JSON.stringify(getReducedAlbum(album))
        )}`}
      >
        <Image
          priority
          src={album.artworkUrl100}
          height={200}
          width={200}
          alt={`${album.name || ''} image`}
        />
      </Link>
      <h3 className="text-md text-ellipsis font-semibold">{album.name}</h3>
      <h4 className="text-ellipsis text-sm">{album.artistName}</h4>
    </div>
  )
}
