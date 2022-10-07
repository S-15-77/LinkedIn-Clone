import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
function Header() {
  return (
    <div className='header'>

        <div className="header_left">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt=""  />
            <div className="header_search">
                <SearchIcon></SearchIcon>
                <input type="text" />
            </div>
        </div>
        <div className="header_right">
            <HeaderOption Icon = {HomeIcon} title = "Home"/>
            <HeaderOption Icon = {SupervisorAccountIcon} title = "My Network"/>
            <HeaderOption Icon = {BusinessCenterIcon} title = ""/>
            <HeaderOption Icon = {ChatIcon} title = "My Network"/>
            <HeaderOption Icon = {NotificationsIcon} title = "My Network"/>
            <HeaderOption avatar="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F09%2F87%2F55%2F0987554a8cdd4667fd46ade7cabbb96e.jpg&f=1&nofb=1&ipt=6620376cd93b9ada3a0c39b7f547f3a274a47c00ef2ea3c7191c401cb583b97e&ipo=images" title = "me"/>
        </div>
    </div>
  )
}

export default Header