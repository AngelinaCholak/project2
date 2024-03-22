import React from 'react'
import css from './Main.module.css';
// import backgroundImage from '../../assets/img/background-image.png';

const Main = () => {
  return (
    <section className={css.container}>
      <div className={css.main}>
        <h2 className={css.title}>Вирішуєте з чого почати?</h2>
        <p className={css.text1}>Найкращі цінові пропозиції</p>
        <p>саме для вас!</p>
        <button className={css.button}>Хочу перевірити :)</button>
      </div>
    </section>
  );
}

export default Main