import React from 'react'
import './footer.css'
import logo2 from '../../assets/footer-logo.svg'
import telegram from '../../assets/telegram-svgrepo-com.svg'
import vk from '../../assets/vk.svg'



const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-conteiner">
        <div className="footerend">
          <img src={logo2} alt='logo2' />
          <p>123022, г. Москва,</p>
          <p>ул. Красная Пресня 28, оф. 503</p>
        </div>
        <div className="leftfooter">
          <a>Спутники</a>
          <a>НКИ</a>
          <a>Данные ДЗЗ</a>
          <a>Производство</a>
          <a>Продукты</a>
        </div>
        <div className="centerfooter">
          <a>О компании</a>
          <a>Новости</a>
          <a>Вакансии</a>
        </div>
        <div className="rightfooter">
          <p>Контакты</p>
          <a>8 800 222-87-18</a>
          <a>+7(903) 441-24-41</a>
          <a>info@stilspace.ru</a>
        </div>
        <div className="seti">
          <img src={telegram} alt="telegramicon" />
          <img src={vk} alt="vk" />
        </div>
      </div>
      <p id='rr'>© Stilspace, 2024</p>
    </div>
  )
}

export default Footer
