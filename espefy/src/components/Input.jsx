import React from 'react';

const Input = ({ placeholder, value, onChange }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="border border-gray-300 rounded px-4 py-2 w-full"
  />
);

export default Input;
