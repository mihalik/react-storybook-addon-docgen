import React from 'react';

// A terribly well documented button component
const ButtonSimple = ({ disabled, label, style, onClick }) => (
  <button disabled={disabled} onClick={onClick}>
    {label}
  </button>
);

export default ButtonSimple;
