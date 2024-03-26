import React from 'react';
import logoImage from '../../../assets/img/logo.png';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <div className={css.logoContainer}>
      <img className={css.logo} src={logoImage} alt="Logo" />
    </div>
  );
};

export default Logo;
