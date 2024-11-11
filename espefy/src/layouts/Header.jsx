import React from 'react';
import slideImage from '../assets/images/slide.jpeg'; // Import the image

const Header = () => (
  <header
    className="relative w-full h-[70vh] bg-cover bg-center" // 70% of the viewport height
    style={{
      backgroundImage: `url(${slideImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
  </header>
);

export default Header;
