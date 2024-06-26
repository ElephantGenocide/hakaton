import {React} from 'react';
import './header.css';
import logo from '../../assets/header-logo.svg';


const Header = () => {
  return (
    <div className='navbar'>
      <div className='navbar_container'>
        <div className='navbar_logo'>
          <img src={logo} alt='logo' />
          <p>За гранью Небес</p>
        </div>
        <div className='navbar_container_links'>
          <a onClick={() => {
            const element = document.getElementById('about');
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}
          >О нас</a>
          <a onClick={() => {
            const element = document.getElementById('content');
            element?.scrollIntoView({
              behavior: 'smooth'
            })

          }}>Продукты</a>
          <a onClick={() => {
            const element = document.getElementById('footer');
            element?.scrollIntoView({
              behavior: 'smooth'
            })

          }}>Связь</a>
        </div>
        <div className='navbar_buttons'>
          <button type='button' href="#login">СТИЛ-ПОРТАЛ</button>
        </div>
      </div>

    </div>
  )
}

export default Header
