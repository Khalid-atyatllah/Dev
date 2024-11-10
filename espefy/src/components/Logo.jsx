import React from 'react';
import espefyLogo from '../assets/images/espe.png';  

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
