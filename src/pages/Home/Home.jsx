import React from 'react'
import Advantages from './Advantages/Advantages';
import css from './Home.module.css';
import Sales from './Sales/SalesDesktop/Sales';

import Seo from './Seo/Seo';
import Testimonials from './Testimonials/Testimonials';
import WatterMath from './WatterMath/WatterMath';

const Home = () => {
  return (
    <div>
      <section className={css.container}>
        <div className={css.main}>
          <h2 className={css.title}>
            Вирішуєте <br /> з чого почати?
          </h2>
          <p className={css.text1}>Найкращі цінові пропозиції</p>

          <p className={css.text2}>саме для вас!</p>
          <button className={css.button}>Хочу перевірити :)</button>
        </div>
      </section>
      <section>
        <Advantages />
      </section>
      <section className={css.containerWatterMath}>
        <WatterMath />
      </section>
      <section>
        <Sales />
      </section>
      <section className={css.containerWatterMath}>
        <Testimonials />
      </section>
      <section>
        <Seo />
      </section>
    </div>
  );
};

export default Home;