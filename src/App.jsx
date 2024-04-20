import { Hero, Features, Content, Footer, Game, Header } from './components/index';
import React, { useState, useEffect } from 'react';
import './App.css'


function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
  //style={{ transform: `translateY(${offsetY * 0.5}px)`}}
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
                <Hero />
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Features />
      <Content />
      <Game />
      <Footer />
    </>
  )
}

export default App
