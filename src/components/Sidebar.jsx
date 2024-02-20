import '../styles/sidebar.css'
import { FaHome } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import { IoLibrary } from 'react-icons/io5'
import { FaGripfire } from 'react-icons/fa'
import { FaPlay } from 'react-icons/fa'
import { FaSignOutAlt } from 'react-icons/fa'

import SidebarButton from './SidebarButton'
import { useEffect, useState } from 'react'
import { apiClient } from '../spotify'
function Sidebar() {
  const [image, setImage] = useState(
    'https://img.freepik.com/premium-vector/girl-s-face-with-beautiful-smile-female-avatar-website-social-network_499739-527.jpg?w=1380',
  )
  useEffect(() => {
    apiClient
      .get('me')
      .then((response) => setImage(response.data.images[0].url))
  }, [])
  return (
    <div className="sidebar-container">
      <img src={image} className="profile-img" alt="profile-picture" />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<FaHome />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign out" to="" icon={<FaSignOutAlt />} />
    </div>
  )
}

export default Sidebar
