import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';

function Header() {
  return (
    <div className='header'>
      <IconButton>
      <PersonIcon fontSize='large' className='header__icon' />
      </IconButton>

      <img className='logo' alt='tinder logo'
      src="https://toppng.com//public/uploads/preview/tinder-logo-transparent-tinder-logo-11563243301zivc1sx84c.png" 
      />
      
      <IconButton>
      <ForumIcon fontSize='large' className='header__icon' />
      </IconButton>
     
    </div>
  )
}

export default Header