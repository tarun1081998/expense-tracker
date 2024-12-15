// Button.js
import React from 'react';

const Button = ({ label, onClick, color }) => {
  return (
    <button className="custom-button" onClick={onClick} style={{background: `linear-gradient(to left, ${color}, white)`}}>
      {label}
    </button>
  );
};

export default Button;
