import React from 'react';
import s from './Button.module.css';

export default function Button({ onClick }) {
  return (
    <button type="submit" className={s.button} onClick={onClick}>
      load more
    </button>
  );
}
