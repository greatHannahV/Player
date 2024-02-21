import { useLocation } from 'react-router-dom'
import '../styles/player.css'
import { useEffect, useState } from 'react'
import { apiClient } from '../spotify'
import SongCard from '../components/SongCard'
import Queue from '../components/Queue'
function Player() {
  const location = useLocation()
  const [tracks, setTracks] = useState([])
  const [currentTrack, setCurrentTrack] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (location.state) {
      apiClient
        .get('playlists/' + location.state?.id + '/tracks')
        .then((res) => {
          setTracks(res.data.items)
          setCurrentTrack(res.data?.items[0]?.track)
        })
    }
  }, [location.state])
  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        {/* <AudioPlayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        /> */}
        {/* <Widgets artistID={currentTrack?.album?.artists[0]?.id} /> */}
        ddddddddddddddddd
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  )
}

export default Player
