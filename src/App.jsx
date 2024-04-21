import { Features, Content, Footer, Header, FeaturesTwo, Game} from './components/index';
import React, { useState, useEffect } from 'react';

import './App.css'


function App() {
  

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
  return (
    <>
      <div className='parallax'>
        <div className='parallax_container'>
          <div className='parallax_container_bg' style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
          
            <div className='parallax_container_content' style={{ transform: `translateY(${offsetY * 0.4}px)` }}>
              <div style={{ transform: `translateY(${offsetY * -0.1}px)` }}>
                <Header />
              </div>
              
              <div style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
                <div className="hero">
                  <div className="hero_section">
                    <div className="hero_section_container">
                      <div className="hero_section_container_title">
                        <h1 style={{ transform: `translateY(${offsetY * -0.15}px)` }}>Планетарное великолепие </h1>
                        <h2 style={{ transform: `translateY(${offsetY * -0.18}px)` }}>Уникальные кадры Земли в высоком разрешении</h2>
                      </div>
                      
                      <div className="hero_section_container_content" style={{ transform: `translateY(${offsetY * 0.25}px)` }}>
                        <p>
                          Погрузитесь в удивительный мир нашей планеты через объектив нашей компании, специализирующейся на коммерческой съемке ландшафта с высоком разрешении из космоса. Наши спутниковые снимки предоставляют уникальную возможность рассмотреть Землю с высоты птичьего полета, раскрывая весь ее великолепный масштаб и красоту.
                          Мы предлагаем широкий спектр услуг, начиная от разведки местности и анализа территории до создания атмосферных и уникальных коммерческих снимков. Наша команда профессиональных фотографов и специалистов по обработке изображений работает со снимками самого высокого качества, чтобы каждая деталь и контур природы были предельно четкими и реалистичными.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Content />
      <FeaturesTwo />
      
      <Footer />
    </>
  )
}


export default App
