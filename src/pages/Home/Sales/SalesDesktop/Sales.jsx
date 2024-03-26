import React, { useState } from 'react';
import css from './Sales.module.css';
import sprite from '../../../../assets/sprite.svg';
import image1 from '../../../../assets/img/image1.png';
import image2 from '../../../../assets/img/image2.png';
import SalesMobil from '../SalesMobil/SalesMobil';

const Sales = () => {
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
        text1: 'та отримай 2 бутлі води уподарунок!',
        color: '#85ab8f',
      },
  ];

  const numSlides = slides.length;
  // eslint-disable-next-line
  const slidesPerView = 2;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % numSlides);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + numSlides) % numSlides);
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Акції</h2>
      <div className={css.sliderWrapper}>
        {slides.map((slide, index) => {
          const adjustedIndex = (currentIndex + index) % numSlides;
          return (
            <div
              key={index}
              className={`${css.sliderItem} ${index === 0 && css.active}`}
              style={{ backgroundColor: slides[adjustedIndex].color }}
            >
              <div className={css.blokText}>
                <p className={css.text}>{slides[adjustedIndex].text}</p>
                <p className={css.text1}>{slides[adjustedIndex].text1}</p>
              </div>
              <img
                className={css.image}
                src={slides[adjustedIndex].image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          );
        })}
        <button className={css.prevButton} onClick={prevSlide}>
          <svg className={css.buttonSvg}>
            <use href={sprite + '#arrow-left'}></use>
          </svg>
        </button>
        <button className={css.nextButton} onClick={nextSlide}>
          <svg className={css.buttonSvg}>
            <use href={sprite + '#arrow-right'}></use>
          </svg>
        </button>
      </div>
      <div className={css.sliderWrappeMobil}>
        <SalesMobil/>
      </div>
    </div>
  );
};

export default Sales;
