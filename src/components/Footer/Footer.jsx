import React from 'react'
import css from './Footer.module.css';
import logoFooter from '../../assets/img/logo-footer.png';
import mastercard from '../../assets/img/mastercard.png';
import liqpay from '../../assets/img/liqpay.png';
import visa from '../../assets/img/visa.png';
import sprite from '../../assets/sprite.svg';
const Footer = () => {
    return (
      <footer className={css.footer}>
        <section className={css.footerSection}>
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
              <img
                src={mastercard}
                alt="Mastercard"
                width="80px"
                height="47px"
              />
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
          <div className={css.phones}>
            <ul className={css.contactsList}>
              <li className={css.contactsItem}>
                <svg className={css.iconSvg}>
                  <use href={sprite + '#contacts-tel'}></use>
                </svg>
                <a className={css.telList} href="tel:(044) 365-44-44">
                  (044) 365-44-44
                </a>
              </li>
              <li className={css.contactsItem}>
                <svg className={css.iconSvg}>
                  <use href={sprite + '#contacts-vb'}></use>
                </svg>
                <a className={css.telList} href="tel:(068) 100-44-44">
                  (068) 100-44-44
                </a>
              </li>
              <li className={css.contactsItem}>
                <svg className={css.iconSvg}>
                  <use href={sprite + '#contacts-ks'}></use>
                </svg>
                <a className={css.telList} href="tel:(098) 422-44-44">
                  (098) 422-44-44
                </a>
              </li>
              <li className={css.contactsItem}>
                <svg className={css.iconSvg}>
                  <use href={sprite + '#contacts-ls'}></use>
                </svg>
                <a className={css.telList} href="tel:(093) 760-44-44">
                  (093) 760-44-44
                </a>
              </li>
              <li className={css.contactsItem}>
                <svg className={css.iconSvg}>
                  <use href={sprite + '#contacts-vf'}></use>
                </svg>
                <a className={css.telList} href="tel:(066) 418-44-44">
                  (066) 418-44-44
                </a>
              </li>
            </ul>
          </div>
          <div className={css.social}>
            <button className={css.buttonSocial}>Замовити воду</button>
            <div className={css.socialSvg}>
              <svg className={css.iconSocial}>
                <use href={sprite + '#facebook-social'}></use>
              </svg>
              <svg className={css.iconSocial}>
                <use href={sprite + '#instagram-social'}></use>
              </svg>
            </div>
            <div className={css.icons}>
              <div className={css.shoppingIcon}>
                <svg className={css.rectangle}>
                  <use href={sprite + '#shopping-cart'}></use>
                </svg>
              </div>
              <div className={css.shoppingIcon}>
                <svg className={css.arrowDowm}>
                  <use href={sprite + '#arrow-dowm1'}></use>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </footer>
    );
}

export default Footer