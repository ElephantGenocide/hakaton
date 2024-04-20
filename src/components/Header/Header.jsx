import React from 'react'
import './header.css'
import logo from '../../assets/header-logo.svg'

const Header = () => {
  return (
    <div className='navbar'>
      <div className='navbar_logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='navbar_container'>
        <a href='#home'>Главная</a>
        <a href='#home'>О нас</a>
        <a href='#products'>Продукты</a>
        <a href='#home'>Связь</a>
      </div>
      <div className='navbar_buttons'>
        <button type='button'>СТИЛ-ПОРТАЛ</button>
        
      </div>
    </div>
  )
}

export default Header
