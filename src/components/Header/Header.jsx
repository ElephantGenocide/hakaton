import React from 'react'
import './header.css'
import logo from '../../assets/fingerpring.svg'

const Header = () => {
  return (
    <div className='navbar'>
      <div className='navbar_logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='navbar_container'>
        <a href='#home'>Главная</a>
        <a href='#home'>О нас</a>
        <a href='#home'>Связь</a>
      </div>
      <div className='navbar_buttons'>
        <button type='button'>Войти</button>
        <button type='button'>Регистрация</button>
      </div>
    </div>
  )
}

export default Header
