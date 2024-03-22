import React from 'react'
import css from "./Header.module.css";
import sprite from "../../assets/sprite.svg";
import Logo from './Logo/Logo';
import ButtonLang from './ButtonLang/ButtonLang';


const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.left}>
        <button className={css.button}>Замовити воду</button>
        <div className={css.social}>
          <svg>
            <use href={sprite + '#telegram'}></use>
          </svg>
          <svg>
            <use href={sprite + '#viber'}></use>
          </svg>
        </div>
      </div>

      <div className={css.logo}>
        <Logo />
      </div>

      <div className={css.right}>
        <button className={css.buttonOn}>Увійти</button>
        <ButtonLang />
        <div className={css.buttonPhone}>
          <div className={css.blockPhone}>
            <a className={css.phoneLink} href="tel:(044) 365-44-44">
              (044) 365-44-44
            </a>
            <a className={css.phoneLink} href="tel:(068) 100-44-44">
              (068) 100-44-44
            </a>
          </div>
          <svg className={css.svg}>
            <use href={sprite + '#arrow-dowm'}></use>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header