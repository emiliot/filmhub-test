import Image from 'next/image'

import { Album } from '../types/album'
import styles from './album.module.css'

type AlbumProps = {
  album: Album
}

export function Album(props: AlbumProps) {
  const { album } = props
  return (
    <div className={styles.container}>
      <Image
        priority
        src={album.artworkUrl100}
        className=""
        height={200}
        width={200}
        alt={`${album.name || ''} image`}
      />
      <h3 className="text-md text-ellipsis">{album.name}</h3>
      <h4 className="text-ellipsis text-sm">{album.artistName}</h4>
    </div>
  )
}
