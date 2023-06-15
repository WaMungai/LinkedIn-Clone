import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'

function Sidebar() {
    const user = useSelector(selectUser)

    
    const recentItem = (topic) =>(
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
         <div className='sidebar__top'>
            <img src="" alt=''/>
            <Avatar src={user.photoUrl} className='sidebar__avatar' >
                {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
            <div className='sidebar_stats'>
        <div className='sidebar_stat'>
            <p>Who viewed you</p>
            <p className='sidebar__statNumber'>3,000</p>
            </div>
            <div className='sidebar_stat'>
            <p>Views on post</p>
            <p className='sidebar__statNumber'>1,122</p>
            </div>
        </div>
        </div>

       

        <div className='sidebar__bottom'>
            <p className=''>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}        
        </div>
    </div>
  )
}

export default Sidebar