import React from 'react'
import './featurestwo.css'
import img123 from '../../assets/feut/png-clipart-computer-icons-service-business-report-management-business-blue-text.svg'


const FeaturesTwo = () => {
  return (
    <div>
      <div id='about' className="feutwo">
        <h1>СТИЛПОРТАЛ</h1>
        <div className="feutwo_conteiner">
          <img src={img123} alt="img123" />
          <div className="feutwo_conteiner_stolbic">
            <ul>
              <li id='feutwo_one'>Онлайн-доступ к космической съемке и сервисам</li>
              <li id='feutwo_two'>-Подбор архивной съемки от разных поставщиков в одном окне</li>
              <li id='feutwo_three'>-Удобный заказ новой съемки на портале</li>
              <li id='feutwo_four'>-Тематическая обработка и аналитика данных ДЗЗ</li>
              <li id='feutwo_five'>-Работа с серией разновременных изображений</li>
              <li id='feutwo_six'>-Онлайн-оплата для физических и юридических лиц</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FeaturesTwo
