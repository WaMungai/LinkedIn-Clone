import React from 'react'
import './HeaderOption.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';

function HeaderOption({avatar,Icon, title, onClick}) {
  const user = useSelector(selectUser)
  
  return (
    <div onClick={onClick} className="headerOption">
        {Icon && <Icon className="headerOption__icon">
        {user?.email[0]}
          </Icon>}
          
        <h3 className="headerOption__title">{title}</h3>
        </div>
  )
}

export default HeaderOption