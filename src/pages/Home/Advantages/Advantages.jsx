import React from 'react'
import css from './Advantages.module.css';
import sprite from '../../../assets/sprite.svg';

const Advantages = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Переваги компанії</h2>
      <div className={css.containerBlok}>
        <div className={css.blok}>
          <div className={css.blokList}>
            <div className={css.list}>
              <svg className={css.listSvg}>
                <use href={sprite + '#production'}></use>
              </svg>
            </div>
            <div className={css.blokText}>
              <h3 className={css.titleList}>Виробництво</h3>
              <p className={css.textList}>
                Використання обладнання провідних світових брендів
              </p>
            </div>
          </div>
        </div>
        <div className={css.blok}>
          <div className={css.blokList}>
            <div className={css.list}>
              <svg className={css.listSvg}>
                <use href={sprite + '#quality'}></use>
              </svg>
            </div>
            <div className={css.blokText}>
              <h3 className={css.titleList}>Якість</h3>
              <p className={css.textList}>
                Суворий контроль якості на всіх етапах виробництва
              </p>
            </div>
          </div>
        </div>
        <div className={css.blok}>
          <div className={css.blokList}>
            <div className={css.list}>
              <svg className={css.listSvg}>
                <use href={sprite + '#approach'}></use>
              </svg>
            </div>
            <div className={css.blokText}>
              <h3 className={css.titleList}>Індивідуальний підхід</h3>
              <p className={css.textList}>
                Зручний індивідуальний графік поставок води
              </p>
            </div>
          </div>
        </div>
        <div className={css.blok}>
          <div className={css.blokList}>
            <div className={css.list}>
              <svg className={css.listSvg}>
                <use href={sprite + '#prices'}></use>
              </svg>
            </div>
            <div className={css.blokText}>
              <h3 className={css.titleList}>Низькі ціни</h3>
              <p className={css.textList}>
                Доступна ціна на воду найвищої якості
              </p>
            </div>
          </div>
        </div>
        <div className={css.blok}>
          <div className={css.blokList}>
            <div className={css.list}>
              <svg className={css.listSvg}>
                <use href={sprite + '#shipping'}></use>
              </svg>
            </div>
            <div className={css.blokText}>
              <h3 className={css.titleList}>Безкоштовна доставка</h3>
              <p className={css.textList}>
                Безкоштовна доставка незалежно від кількості бутлів в замовленні
              </p>
            </div>
          </div>
        </div>
        <div className={css.blok}>
          <div className={css.blokList}>
            <div className={css.list}>
              <svg className={css.listSvg}>
                <use href={sprite + '#bonus'}></use>
              </svg>
            </div>
            <div className={css.blokText}>
              <h3 className={css.titleList}>Бонусна програма</h3>
              <p className={css.textList}>
                Скоро! Програма лояльності для улюблених клієнтів!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages