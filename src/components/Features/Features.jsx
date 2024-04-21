import React from 'react'
import './features.css'
import { Slider } from '../index'
import sheme from '../../assets/Hero/hero.jpg'
import satellite from '../../assets/Features/satellite.svg'
const Features = () => {
  return (
    <div className='features'>
      <div className='features_container'>
        <div className="features_container_title">
          <h1>
            СТИЛСАТ-1
          </h1>
          <h2>
            информация о спутнике
          </h2>
        </div>
        <div className="features_container_list">
        <img src={satellite} alt='sheme' />
          <ul>
            <li id='one'><p>– это аппарат, предназначенный для ведения территориальной съёмки поверхности земли в стратегических целях</p></li>
            <li id='two'><p>обладает пространственным разрешением космических снимков <strong>12 км</strong> и шириной кадра в <strong>20 км</strong></p></li>
            <li id='three'><p>обеспечивает высокую точность изображений и широкие возможности для анализа данных</p></li>
          </ul>
        </div>
        <div className="features_container_conclusion">
          <p>Благодаря оперативности обновления информации, система способна в реальном времени получать данные о различных объектах. Это делает ее эффективным инструментом для наблюдения за природными катастрофами, контроля за изменениями в окружающей среде, а также для военных целей.</p>
        </div>
      </div>
    </div>
  )
}

export default Features
