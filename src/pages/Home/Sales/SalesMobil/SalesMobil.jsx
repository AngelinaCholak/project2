import React, { useState } from 'react';
import css from './SalesMobil.module.css';
import image1 from '../../../../assets/img/image1.png';
import image2 from '../../../../assets/img/image2.png';

const SalesMobil = () => {
  const slides = [
    {
      image: image1,
      text: 'Приведи друга',
      text1: 'та отримай бутель води безкоштовно!',
      color: '#ff6161',
    },
    {
      image: image2,
      text: 'Купи кулер',
      text1: 'та отримай 2 бутлі води у подарунок!',
      color: '#85ab8f',
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  let startX;

  const handleTouchStart = e => {
    startX = e.touches[0].clientX;
  };

  const handleTouchMove = e => {
    const x = e.touches[0].clientX;
    const diff = x - startX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  };

  const prevSlide = () => {
    setCurrentSlideIndex(prevIndex =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlideIndex(prevIndex =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className={css.slider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className={css.slideContainer}>
        <img
          src={slides[currentSlideIndex].image}
          alt={`Slide ${currentSlideIndex + 1}`}
          className={css.slideImage}
        />
        <div
          className={css.slideText}
          style={{ backgroundColor: slides[currentSlideIndex].color }}
        >
          <p>{slides[currentSlideIndex].text}</p>
          <p>{slides[currentSlideIndex].text1}</p>
        </div>
      </div>
      <div className={css.pagination}>
        {slides.map((slide, index) => (
          <span
            key={index}
            className={index === currentSlideIndex ? css.dotActive : css.dot}
            onClick={() => setCurrentSlideIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SalesMobil;
