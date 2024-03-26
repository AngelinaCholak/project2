import React from 'react';
import css from './Header.module.css';
import sprite from '../../assets/sprite.svg';
import Logo from './Logo/Logo';
import ButtonLang from './ButtonLang/ButtonLang';

const Header = ({ onToggleMenu, isMenuOpen, onClose }) => {
  const handleToggleMenu = () => {
    onToggleMenu();
  };
  const handleCloseMenu = () => {
    onClose();

  };

  return (
    <header className={css.container}>
      <div className={css.header}>
        <div className={css.left}>
          <button className={css.button}>Замовити воду</button>
          <div className={css.social}>
            <svg>
              <use href={sprite + '#telegram'}></use>
            </svg>
            <svg>
              <use href={sprite + '#viber'}></use>
            </svg>
            <svg className={css.svgTel}>
              <use href={sprite + '#phone'}></use>
            </svg>
          </div>
        </div>

        <div className={css.logo}>
          <Logo />
        </div>

        {isMenuOpen ? (
          <button className={css.burgerButton} onClick={handleCloseMenu}>
            <svg className={css.burgerIcon}>
              <use href={sprite + '#close'}></use>
            </svg>
          </button>
        ) : (
          <button className={css.burgerButton} onClick={handleToggleMenu}>
            <svg className={css.burgerIcon}>
              <use href={sprite + '#burger'}></use>
            </svg>
          </button>
        )}

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
      </div>
    </header>
  );
};

export default Header;
