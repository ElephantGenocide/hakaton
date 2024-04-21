import React from 'react'
import './featurestwo.css'
import img123 from '../../assets/feut/png-clipart-computer-icons-service-business-report-management-business-blue-text.svg'


const FeaturesTwo = () => {
  return (
    <div>
      <div id='about' className="feutwo">
        <div className="feutwo_conteiner">
          <h1>СТИЛПОРТАЛ</h1>
          <img src={img123} alt="img123" />
        </div>
        <div className="feutwo_conteiner_stolbic">
          <h2 className='shcont'>Онлайн-доступ к космической съемке и сервисам</h2>
          <p>-Подбор архивной съемки от разных поставщиков в одном окне</p>
          <p>-Удобный заказ новой съемки на портале</p>
          <p>-Тематическая обработка и аналитика данных ДЗЗ</p>
          <p>-Работа с серией разновременных изображений</p>
          <p>-Онлайн-оплата для физических и юридических лиц</p>
        </div>
      </div>
    </div>
  )
}

export default FeaturesTwo
