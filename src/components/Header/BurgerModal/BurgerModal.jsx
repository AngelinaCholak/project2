import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ButtonLang from '../ButtonLang/ButtonLang';
import css from './BurgerModal.module.css';
import Search from './Search/Search';

const BurgerModal = ({ onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = e => {
      if (!modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  const handleLinkClick = () => {
    onClose(); 
  };

  return (
    <div className={css.container} ref={modalRef}>
      <div className={css.search}>
        <Search />
        <div className={css.buttonLang}>
          <ButtonLang />
        </div>
      </div>
      <button className={css.personalOffice}>Особистий кабінет</button>
      <div>
        <nav>
          <ul className={css.navList2}>
            <li className={css.list}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/"
                onClick={handleLinkClick}
              >
                Головна
              </NavLink>
            </li>
            <li className={css.list}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/shop"
                onClick={handleLinkClick}
              >
                Магазин
              </NavLink>
            </li>
            <li className={css.list}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/aboutwater"
                onClick={handleLinkClick}
              >
                Про воду
              </NavLink>
            </li>
            <li className={css.list}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/delivery"
                onClick={handleLinkClick}
              >
                Доставка і ціни
              </NavLink>
            </li>
            <li className={css.list}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/actions"
                onClick={handleLinkClick}
              >
                Акції
              </NavLink>
            </li>
            <li className={css.list}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/blog"
                onClick={handleLinkClick}
              >
                Блог
              </NavLink>
            </li>
            <li className={css.list}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/contacts"
                onClick={handleLinkClick}
              >
                Контакти
              </NavLink>
            </li>
            <li className={css.list}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/company"
                onClick={handleLinkClick}
              >
                Про компанію
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BurgerModal;

