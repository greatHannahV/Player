function AlbumImage({ url }) {
  return (
    <div className="w-[80%] mt-5 flex items-center justify-center relative z-10">
      <img
        src={url}
        alt="album art"
        className="rounded-[30px] w-full aspect-w-1 aspect-h-1"
      />
      <div className="albumImage-shadow">
        <img src={url} alt="shadow" className="albumImage-shadow" />
      </div>
    </div>
  )
}
export default AlbumImage
