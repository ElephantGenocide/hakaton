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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim adipisci totam laborum nostrum nobis quisquam quis eveniet, cum accusamus corporis reprehenderit molestias. Voluptatem in quis suscipit necessitatibus doloribus numquam doloremque!</p>
          <div className="slider">
            <Slider />
          </div>
        </div>
      </div>
    
  )
}

export default Content
