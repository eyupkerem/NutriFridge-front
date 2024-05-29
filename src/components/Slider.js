import "./Slider.css"

import React, { useState, useEffect } from 'react';

const Slider = ({ slides, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [slides.length, interval]);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.image} className="slider-image" />
        </div>
      ))}
    </div>
  );
};

export default Slider;
