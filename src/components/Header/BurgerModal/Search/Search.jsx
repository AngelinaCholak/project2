import React from 'react';
import css from './Search.module.css';
import sprite from '../../../../assets/sprite.svg';

const Search = () => {
  
  return (
    <div className={css.search}>
      <input
        type="text"
        placeholder="Пошук..."
        className={css.input}
      />
      <svg className={css.searchIcon}>
        <use href={sprite + '#search'}></use>
      </svg>
    </div>
  );
};

export default Search;
