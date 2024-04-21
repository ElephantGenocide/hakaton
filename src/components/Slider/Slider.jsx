import React from 'react';


import { Carousel } from "./carousel/Carousel";
import { slides } from "./data/carouselData.json";

const Slider = () => {
  return (
    <div className="slider">
      <Carousel data={slides} />
    </div>
  )
}

export default Slider