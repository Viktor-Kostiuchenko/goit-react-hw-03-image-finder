import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ onClick }) {
  return (
    <button type="submit" className={s.button} onClick={onClick}>
      load more
    </button>
  );
}

Button.protoTypes = {
  onClick: PropTypes.func.isRequired,
};
