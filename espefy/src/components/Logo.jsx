// src/components/Logo.jsx
import React from 'react';
import espefyLogo from '../assets/images/espe.png'; // Adjust the import to match your image name and path

const Logo = () => {
  return (
    <img
      alt="Espefy Logo"
      src={espefyLogo} // Use the imported image instead of a string path
      className="h-8 w-auto"
    />
  );
};

export default Logo;
