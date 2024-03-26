import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layoyt from './Layoyt/Layoyt';
import css from './App.module.css';
import Shop from 'pages/Shop/Shop';
import AboutWater from 'pages/AboutWater/AboutWater';
import Delivery from 'pages/Delivery/Delivery';
import Actions from 'pages/Actions/Actions';
import Blog from 'pages/Blog/Blog';
import Contacts from 'pages/Contacts/Contacts';
import Company from 'pages/Company/Company';
import Home from 'pages/Home/Home';
import Footer from './Footer/Footer';

export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layoyt />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="aboutwater" element={<AboutWater />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="actions" element={<Actions />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="company" element={<Company />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};
