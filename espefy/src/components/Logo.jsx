import React from 'react';
import espefyLogo from '../assets/images/espe.png';  

const Logo = () => {
  return (
    <img
      alt="Espefy Logo"
      src={espefyLogo} 
      className="h-8 w-auto"
    />
  );
};

export default Logo;
