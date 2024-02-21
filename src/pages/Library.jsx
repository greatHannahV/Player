import { useState, useEffect } from 'react'
import { apiClient } from '../spotify'
import '../styles/library.css'
import { IconContext } from 'react-icons'
import { AiFillPlayCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function Library() {
  const [playlists, setPlaylists] = useState(null)
  useEffect(() => {
    apiClient.get('me/playlists').then(function (response) {
      setPlaylists(response.data.items)
    })
  }, [])
  const navigate = useNavigate()
  const playPlaylist = (id) => {
    navigate('/player', { state: { id: id } })
  }
  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists?.map((playlist) => (
          <div
            className="playlist-card"
            key={playlist.id}
            onClick={() => playPlaylist(playlist.id)}
          >
            <img
              src={
                playlist?.images[0]?.url ||
                'https://thumb.ac-illust.com/27/272c6585421e944cd57065da24b6b7b9_t.jpeg'
              }
              className="playlist-image"
              alt="Playlist-Art "
            />
            <p className="playlist-title ">{playlist.name}</p>

            <p className="playlist-subtitle ">{playlist.tracks.total} Songs</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: '50px', color: '#2e5a4a' }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Library
