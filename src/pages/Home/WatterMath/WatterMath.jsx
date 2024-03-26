import React, { useState } from 'react';
import css from './WatterMath.module.css';
import sprite from '../../../assets/sprite.svg';
import bottle from '../../../assets/img/image-bottle.png';
import classic from '../../../assets/img/classic-water.png';
import silver from '../../../assets/img/silver-water.png';

const WatterMath = () => {
  const initialValue = 115;

  const [selectedUnits1, setSelectedUnits1] = useState(1);

  const [selectedUnits2, setSelectedUnits2] = useState(1);

  const calculateSum = selectedUnits => {
    return initialValue * selectedUnits;
  };


  const handleIncrement1 = () => {
    setSelectedUnits1(selectedUnits1 + 1);
  };


  const handleDecrement1 = () => {
    if (selectedUnits1 > 1) {
      setSelectedUnits1(selectedUnits1 - 1);
    }
  };


  const handleIncrement2 = () => {
    setSelectedUnits2(selectedUnits2 + 1);
  };


  const handleDecrement2 = () => {
    if (selectedUnits2 > 1) {
      setSelectedUnits2(selectedUnits2 - 1);
    }
  };

  return (
    <div className={css.containerWatterMath}>
      <div className={css.text}>
        <h2 className={css.headline}>
          Ми пропонуємо доставку води найвищої якості
        </h2>
        <p className={css.headText}>додому або в офіс у Києві</p>
      </div>
      <div className={css.blok}>
        <div className={css.classic}>
          <img src={classic} alt="bottle" />
        </div>
        <div className={css.textLeft}>
          <h3 className={css.titleMatch}>Вода Класична</h3>
          <p className={css.textMatch}>
            Вода з оптимальним мінерально-сольовим складом. Поповнює водний
            баланс і підвищує тонус організму.
          </p>
          <div className={css.math}>
            <div className={css.sumBlok}>
              <p className={css.mathSum}>
                {initialValue} грн
                <svg className={css.multiply}>
                  <use href={sprite + '#multiply'}></use>
                </svg>
              </p>
            </div>

            <div className={css.matBlok}>
              <p className={css.matResult}>{selectedUnits1}</p>
              <button className={css.buttonMathPlus} onClick={handleIncrement1}>
                <svg className={css.buttonSvg}>
                  <use href={sprite + '#plus'}></use>
                </svg>
              </button>
              <button
                className={css.buttonMathMinus}
                onClick={handleDecrement1}
                disabled={selectedUnits1 === 1}
              >
                <svg className={css.buttonSvg}>
                  <use href={sprite + '#minus'}></use>
                </svg>
              </button>
            </div>

            <div className={css.sumBlok}>
              <p className={css.mathSum}>
                <svg className={css.multiply}>
                  <use href={sprite + '#equal'}></use>
                </svg>
                {calculateSum(selectedUnits1)} грн
              </p>
            </div>
          </div>
          <button className={css.button}>Замовити воду</button>
        </div>
        <div className={css.img}>
          <img src={bottle} alt="bottle" />
        </div>
        <div className={css.classic}>
          <img src={silver} alt="bottle" />
        </div>
        <div className={css.textRight}>
          <h3 className={css.titleMatch}>Вода Срібна</h3>
          <p className={css.textMatch}>
            Вода, насичена іонами срібла. Має противірусну та антимікробну дію,
            благотворно впливає на роботу організму.
          </p>
          <div className={css.math}>
            <div className={css.sumBlok}>
              <p className={css.mathSum}>
                {initialValue} грн
                <svg className={css.multiply}>
                  <use href={sprite + '#multiply'}></use>
                </svg>
              </p>
            </div>

            <div className={css.matBlok}>
              <p className={css.matResult}>{selectedUnits2}</p>
              <button className={css.buttonMathPlus} onClick={handleIncrement2}>
                <svg className={css.buttonSvg}>
                  <use href={sprite + '#plus'}></use>
                </svg>
              </button>
              <button
                className={css.buttonMathMinus}
                onClick={handleDecrement2}
                disabled={selectedUnits2 === 1}
              >
                <svg className={css.buttonSvg}>
                  <use href={sprite + '#minus'}></use>
                </svg>
              </button>
            </div>

            <div className={css.sumBlok}>
              <p className={css.mathSum}>
                <svg className={css.multiply}>
                  <use href={sprite + '#equal'}></use>
                </svg>
                {calculateSum(selectedUnits2)} грн
              </p>
            </div>
          </div>
          <button className={css.button}>Замовити воду</button>
        </div>
      </div>
    </div>
  );
};

export default WatterMath;
