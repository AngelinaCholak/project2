import React from 'react'
import css from './Footer.module.css';
import logoFooter from '../../assets/img/logo-footer.png';
import mastercard from '../../assets/img/mastercard.png';
import liqpay from '../../assets/img/liqpay.png';
import visa from '../../assets/img/visa.png';
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
        <div className={css.menuFooter}>
          <p className={css.menuText}>Головна</p>
          <p className={css.menuText}>Про воду</p>
          <p className={css.menuText}>Доставка і ціни</p>
          <p className={css.menuText}>Акції</p>
          <p className={css.menuText}>Контакти</p>
          <p className={css.menuText}>Договір-оферта</p>
        </div>
        <div className={css.payments}>
          <p className={css.paymentsText}>Способи оплати:</p>
          <div className={css.imgMenu}>
            <img src={mastercard} alt="Mastercard" width="80px" height="47px" />
            <img
              className={css.imgLiqpay}
              src={liqpay}
              alt="Liqpay"
              width="80px"
              height="16px"
            />
            <img
              className={css.imgVisa}
              src={visa}
              alt="Visa"
              width="80px"
              height="32px"
            />
          </div>
        </div>
      </footer>
    );
}

export default Footer