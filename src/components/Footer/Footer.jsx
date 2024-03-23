import React from 'react'
import css from './Footer.module.css';
import logoFooter from '../../assets/img/logo-footer.png';
const Footer = () => {
    return (
      <footer className={css.footer}>
        <div className={css.logoFooter}>
          <img className={css.img} src={logoFooter} alt="Logo" />
          <p className={css.text}>
            © 2013 - 2024 AQUAPRO. Всі права захищені Разработка сайта
            WellDigital
          </p>
        </div>
      </footer>
    );
}

export default Footer