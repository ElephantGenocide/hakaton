import React from 'react'
import './content.css'
import { Slider } from '../index'

const Content = () => {
  return (
    <div id='content' className='content'>
      <div className="content_container">
        <div className='content_container_title'>
          <h1>Примеры наших снимков</h1>
        </div>
          <p>Примеры оптической съемки в сверхвысоком разрешении. </p>
          <div className="slider">
            <Slider />
          </div>
        </div>
      </div>
    
  )
}

export default Content
