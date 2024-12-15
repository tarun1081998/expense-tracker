// InputBox.js
import React from 'react';

const InputBox = ({ type, placeholder, value, onChange }) => {
  return (
    <input 
      type={type} 
      className="input-box" 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
    />
  );
};

export default InputBox;
