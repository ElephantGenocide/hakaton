import React from 'react'
import './featurestwo.css'



const FeaturesTwo = () => {
  return (
    <div>
      <div className="feutwo">
        <div className="feutwo_conteiner">
          <h1>СТИЛПОРТАЛ</h1>
          <h2 className='shcont'>Онлайн-доступ к космической съемке и сервисам</h2>
        </div>
        <div className="feutwo_conteiner_stolbic">
          <p>Подбор архивной съемки от разных поставщиков в одном окне</p>
          <p>Удобный заказ новой съемки на портале</p>
          <p>Тематическая обработка и аналитика данных ДЗЗ</p>
          <p>Работа с серией разновременных изображений</p>
          <p>Онлайн-оплата для физических и юридических лиц</p>
        </div>
        <h2 className='service'>Сервис</h2>
      </div>
    </div>
  )
}

export default FeaturesTwo
