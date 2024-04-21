import React from 'react'
import './featurestwo.css'
import img123 from '../../assets/feut/png-clipart-computer-icons-service-business-report-management-business-blue-text.svg'


const FeaturesTwo = () => {
  return (
    <div>
      <div id='about' className="features-two">
        <div className="features-two_box">
          <h1>СТИЛПОРТАЛ</h1>
          <div className="features-two_container">
            <img src={img123} alt="img123" />
            <div className="features-two_conteiner_stolbic">
              <ul>
                <li>Онлайн-доступ к космической съемке и сервисам</li>
                <li>-Подбор архивной съемки от разных поставщиков в одном окне</li>
                <li>-Удобный заказ новой съемки на портале</li>
                <li>-Тематическая обработка и аналитика данных ДЗЗ</li>
                <li>-Работа с серией разновременных изображений</li>
                <li>-Онлайн-оплата для физических и юридических лиц</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesTwo
