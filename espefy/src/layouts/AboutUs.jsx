import React, { useEffect } from 'react';
import { FaGift, FaBox, FaShippingFast } from 'react-icons/fa';
import espefyLogo from '../assets/images/espefy.png';

const AboutUs = () => {
  useEffect(() => {
    if (window.location.hash === '#about-us') {
      document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="about-us" className=" text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-6">
          At Espefy, we believe in celebrating every special moment with a thoughtful touch. Whether it's a birthday, anniversary, or a special celebration, we ensure each gift is curated with care and personalized to perfection.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center">
            <img src={espefyLogo} alt="Espefy Logo" className="rounded-lg shadow-lg w-72 h-72 object-cover mb-6" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold mb-4">What Makes Espefy Unique</h3>
            <ul className="list-none text-left text-gray-300">
              <li className="flex items-center mb-4">
                <a href="/gift-box" className="flex items-center text-white mr-3 hover:text-white">
                  <FaGift className="text-gold mr-3" />
                  Customizable gift boxes for every occasion
                </a>
              </li>
              <li className="flex items-center mb-4">
                <FaBox className="text-gold mr-3" />
                High-quality products and packaging
              </li>
              <li className="flex items-center mb-4">
                <FaShippingFast className="text-gold mr-3" />
                Fast and reliable shipping
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
