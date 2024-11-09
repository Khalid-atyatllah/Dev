import React from 'react';

const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`border-white rounded-md border text-white py-3 px-6   bg-transparent text-white ${className}`}
  >
    {children}
  </button>
);

export default Button;
