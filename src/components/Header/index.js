import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material'
import { useDispatch} from 'react-redux';
import { logout } from '../../features/user/userSlice';
import {auth} from '../../firebase'

function Header() {
  const dispatch = useDispatch()

  const logoutOfApp = () => {
       dispatch(logout())
       auth.signOut()
  }

  return (
    <div className='header'>
        <div className='header__left'>
         <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
            <div className='header__search'>
                <SearchIcon />
                <input placeholder='Search' type="text" />
        </div>
        </div>
        <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={GroupIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOption Icon={ChatIcon} title="Messaging"/>
        <HeaderOption  Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption avatar={true} Icon={Avatar} title="Me" onClick={logoutOfApp}/>
        </div>
    </div>
  )
}

export default Header