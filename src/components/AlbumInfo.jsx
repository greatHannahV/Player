function AlbumInfo({ album }) {
  const artists = []
  album?.artists?.map((element) => {
    artists.push(element.name)
  })
  return (
    <div className="mt-5 w-[80%]">
      <div className="w-full overflow-hidden text-[20px] font-bold text-gray-800">
        <div className="marquee">
          <p>{album?.name + ' - ' + artists?.join(', ')}</p>
        </div>
      </div>
      <div className="album-info">
        <p>{`${album?.name} is an ${album?.album_type} by ${artists?.join(
          ', ',
        )} with ${album?.total_tracks} track(s)`}</p>
      </div>
      <div className="  font-sm font-bold text-gray-600 mt-3">
        <p>Release Date: {album?.release_date}</p>
      </div>
    </div>
  )
}

export default AlbumInfo
