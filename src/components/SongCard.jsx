import AlbumImage from './AlbumImage'
import AlbumInfo from './AlbumInfo'

function SongCard({ album }) {
  return (
    <div className="w-full h-[62%] bg-[#d9e6e1] rounded-[30px] rounded-br-none flex flex-col justify-center items-center">
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </div>
  )
}

export default SongCard
