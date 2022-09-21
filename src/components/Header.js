import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';

import "./styles.css"

export default function Header() {
  return (
    <div className="headerWrapper">
        <MenuIcon />
        <span className="header-configuration">
         <SettingsIcon style={{width: '2rem', height: '2rem'}}/>
         <div className="userIcon">UN</div>
        </span>
    </div>
  )
}
