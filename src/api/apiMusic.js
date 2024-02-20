const url = `https://api.deezer.com/album/
`

export async function getMusic() {
  try {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
