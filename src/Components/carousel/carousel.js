// src/Carousel.js
import React, { useState, useEffect } from "react";
import Poster1 from '../../Images/poster1.jpg';
import Poster2 from '../../Images/poster2.jpg';

const Carousel = () => {
  const slides = [
    { url: Poster1, alt: "Slide 1" },
    { url: Poster2, alt: "Slide 2" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-xl mx-auto posterindex">
      <div className="overflow-hidden relative " style={{ height: '250px' }}>
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full mt-14">
              <img
                src={slide.url}
                alt={slide.alt}
                className="w-full h-full object-cover "
                style={{ height: '200px', borderWidth: 1 }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Uncomment the following buttons if you want to add manual slide control */}
      {/* 
      <button
        onClick={prevSlide}
        style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '0', padding: '8px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', zIndex: 10 }}
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '0', padding: '8px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', zIndex: 10 }}
      >
        &#10095;
      </button>
      */}
      {/* Uncomment the following indicators if you want to add slide indicators */}
      {/* 
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px', position: 'relative', zIndex: 10 }}>
        {slides.map((_, index) => (
          <div
            key={index}
            style={{
              width: '12px',
              height: '4px',
              borderRadius: '2px',
              margin: '0 4px',
              cursor: 'pointer',
              backgroundColor: currentIndex === index ? 'rgba(0, 0, 0, 0.8)' : 'rgba(128, 128, 128, 0.8)'
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      */}
    </div>
  );
};

export default Carousel;
