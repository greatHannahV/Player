import AlbumImage from './AlbumImage'
import AlbumInfo from './AlbumInfo'

function SongCard({ album }) {
  return (
    <div className="w-full h-[65%] bg-[#6f8086] rounded-[30px] rounded-br-none flex flex-col justify-center items-center">
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </div>
  )
}

export default SongCard
