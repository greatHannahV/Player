import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Library from './pages/Library'
import Feed from './pages/Feed'
import Player from './pages/Player'
import Favorites from './pages/Favorites'
import Trending from './pages/Trending'
import Sidebar from './components/Sidebar'
import Login from './pages/auth/Login'
import { useEffect, useState } from 'react'
import { setClientToken } from './spotify'
function App() {
  const [token, setToken] = useState('')
  useEffect(() => {
    const token = window.localStorage.getItem('token')

    const hash = window.location.hash
    window.location.hash = ''
    if (!token && hash) {
      const _token = hash.split('&')[0].split('=')[1]
      window.localStorage.setItem('token', _token)
      setToken(_token)
      setClientToken(_token)
    } else {
      setToken(token)
      setClientToken(token)
    }
  }, [])
  return !token ? (
    <Login />
  ) : (
    <BrowserRouter>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/tranding" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
