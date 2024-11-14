import React from 'react';

const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`border-brown6d rounded-md border text-gold py-3 px-6   bg-transparent text-white ${className}`}
  >
    {children}
  </button>
);

export default Button;
