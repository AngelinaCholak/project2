import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layoyt.module.css';
import Header from 'components/Header/Header';
import BurgerModal from 'components/Header/BurgerModal/BurgerModal';


const Layoyt = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsModalOpen(!isModalOpen); 
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setIsModalOpen(false); 
  };

  return (
    <div className={css.headerContainer}>
      <Header onToggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div>
        <nav className={`${css.nav} ${isMenuOpen ? css.navOpen : ''}`}>
          <ul className={css.navList}>
            <li className={css.list}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/"
              >
                Головна
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/shop"
              >
                Магазин
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/aboutwater"
              >
                Про воду
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/delivery"
              >
                Доставка і ціни
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/actions"
              >
                Акції
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/blog"
              >
                Блог
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/contacts"
              >
                Контакти
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/company"
              >
                Про компанію
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
      {isModalOpen && <BurgerModal onClose={handleCloseMenu} />}
    </div>
  );
};

export default Layoyt;
