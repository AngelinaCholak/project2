import React from 'react'
import css from './Main.module.css';

const Main = () => {
  return (
    <section className={css.container}>
      <div className={css.main}>
        <h2 className={css.title}>Вирішуєте <br/> з чого почати?</h2>
        <p className={css.text1}>Найкращі цінові пропозиції</p>

        <p className={css.text2}>саме для вас!</p>
        <button className={css.button}>Хочу перевірити :)</button>
      </div>
    </section>
  );
}

export default Main