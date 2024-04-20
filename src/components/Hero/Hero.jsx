import React from "react";
import "./hero.css";
import{ Header } from '../index'


const Hero = () => {
  return (
    <>
    <div className="hero">
      <Header />
      <div className="hero_container">
        <div className="hero_container_image">
          <img src='' alt="image" />
        </div>
        <div className="hero_container_text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            delectus totam repudiandae porro similique saepe temporibus sapiente
            culpa sint molestias quam tempora amet exercitationem voluptates
            ipsa adipisci voluptas fuga obcaecati!
          </p>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Hero;
