import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layoyt.module.css';


const Layoyt = () => {
  return (
    <div className={css.headerContainer}>
      <Header />

      <div className={css.container}>
        <nav>
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
        <main>
          <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default Layoyt;
