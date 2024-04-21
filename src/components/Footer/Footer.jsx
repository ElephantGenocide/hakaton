import React from 'react'
import './footer.css'
import logo2 from '../../assets/footer-logo.svg'
import tg from '../../assets/telegram-svgrepo-com.svg'
import vk from '../../assets/vk.svg'



const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_container">
        <div className="footer_container_section1">
          <img src={logo2} alt='logo-footer' />
          <div className="footer_container_section1_content">
            <p>123022, г. Москва,</p>
            <p>ул, Красная Персня 28, оф. 503</p>
          </div>
          <div className="footer_container_section1_icons">
            <img src={tg} alt='tg' />
            <img src={vk} alt='vk' />
          </div>
        </div>
        <div className="footer_container_section2">
          <div className="footeer_container_section2_section1">
            <p><a>Спутники</a></p>
            <p><a>НКИ</a></p>
            <p><a>Данные ДЗЗ</a></p>
            <p><a>Производство</a></p>
            <p><a>Продукты</a></p>
          </div>
          <div className="footeer_container_section2_section2">
            <p><a>О компании</a></p>
            <p><a>Новости</a></p>
            <p><a>Вакансии</a></p>
          </div>
          <div className="footeer_container_section2_section3">
            <p><a>Контакты</a></p>
            <p><a>8 800 222-87-18</a></p>
            <p><a>+7(903) 441-24-41</a></p>
            <p><a>info@stilspace.ru</a></p>
          </div>
        </div>
      </div>
      <div className="footer_copymark">
        <p>© Stilspace, 2024</p>
      </div>

    </div>
  )
}

export default Footer
