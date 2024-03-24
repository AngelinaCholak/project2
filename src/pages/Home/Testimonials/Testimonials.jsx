import React, { useState } from 'react';
import css from './Testimonials.module.css';
import sprite from '../../../assets/sprite.svg';
import image3 from '../../../assets/img/image3.png';

const Testimonials = () => {
  const [loadedBlocks, setLoadedBlocks] = useState(3);

  const loadMoreBlocks = () => {
    setLoadedBlocks(prevLoadedBlocks => prevLoadedBlocks + 3);
  };

  const blocks = Array.from({ length: loadedBlocks }, (_, index) => (
    <div key={index} className={css.blok}>
      <p className={css.text}>
        Заказываю доставку воды в Aqua Pro последние 5 лет, это минимум. Мне
        нравится, что у ребят достаточно гибкие временные рамки, и они всегда
        доставляют воду в удобное для меня время. И отдельное спасибо курьеру,
        который говорит: "Доставка воды и хорошего настроения!":){' '}
      </p>
      <div className={css.blokTestimonials}>
        <img src={image3} alt={image3} className={css.image} />
        <div className={css.testimonialsBlok}>
          <h2 className={css.titleTestimonials}>Евгения Кукушкина</h2>
          <div className={css.star}>
            <svg>
              <use width="13" height="12" href={sprite + '#star'}></use>
            </svg>
            <svg>
              <use width="13" height="12" href={sprite + '#star'}></use>
            </svg>
            <svg>
              <use width="13" height="12" href={sprite + '#star'}></use>
            </svg>
            <svg>
              <use width="13" height="12" href={sprite + '#star'}></use>
            </svg>
            <svg>
              <use width="13" height="12" href={sprite + '#star'}></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  ));

  const rows = [];
  for (let i = 0; i < blocks.length; i += 3) {
    rows.push(
      <div key={i} className={css.row}>
        {blocks.slice(i, i + 3)}
      </div>
    );
  }

  return (
    <div className={css.container}>
      <h2 className={css.title}>Клієнти говорять про нас</h2>
          <div className={css.containerBlok}>
              {rows}</div>
     
        <button className={css.button} onClick={loadMoreBlocks}>
          Ще відгуки
          <svg className={css.buttonSvg}>
            <use href={sprite + '#arrow-right'}></use>
          </svg>
        </button>
 
    </div>
  );
};

export default Testimonials;
