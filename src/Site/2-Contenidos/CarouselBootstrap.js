import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
function Slider( {slides} ) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, ) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {slides.map((slide) => (
        <Carousel.Item key={slide.image}>
        <img className="d-block" src={require('../../Assets/img/'+slide.image+'.jpg')} alt="Slide" />
        <Carousel.Caption>
          <h3>{slide.title}</h3>
          <p>{slide.subtitle}</p>
        </Carousel.Caption>
      </Carousel.Item>      
      ))}
    </Carousel>
  );
};
export default Slider;