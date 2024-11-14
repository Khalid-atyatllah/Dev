import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa'; // Social media icons
import Logo from '../components/Logo'; // Adjust the path if necessary

const Footer = () => {
  return (
    <footer className="bg-primary flex flex-wrap justify-between items-center py-4 md:py-12 px-4 md:px-12 lg:px-24 xl:px-36 border-t border-brown68">
      {/* Left Section */}
      <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
        <div className="mb-6">
          <a href="/">
            <Logo /> {/* You may replace Logo with an img tag if needed */}
          </a>
        </div>
        <p className="mb-6 leading-7 text-white">
          Espefy est votre choix ultime en matière de cadeaux. Achetez des boxes pré-selectionnées pour vos amis et votre famille, créez une craftybox entièrement personnalisée ou réalisez des boxes cadeaux pour votre entreprise.
        </p>
        <p className="font-black font-title leading-7 mb-4 text-lg uppercase text-brown6d">Rejoignez-nous</p>
        <form className="flex">
          <div className="pr-2 w-3/4">
            <input
              type="email"
              className="border-brown6d rounded-md border w-full py-3 px-6 focus:outline-none bg-transparent text-white"
              placeholder="Votre adresse e-mail"
              required
            />
          </div>
          <div className="w-1/4">
            <button className="w-full rounded-md border border-brown6d  bg-black text-white text-xs block py-3 px-6 text-center" type="submit">
              Valider
            </button>
          </div>
        </form>
      </div>



      {/* Right Section */}
      <div className="w-full sm:w-7/12 md:w-1/4 text-center sm:text-left">
        <h2 className="uppercase mb-6 text-2xl md:text-4xl font-title font-black text-brown6d">Nous contacter</h2>
        <p className="mb-6 text-white">Des questions? Nous sommes là pour vous du lundi au vendredi, de 9 h à 17 h.</p>
        <div className="border-t-2 border-beigeA08 py-2 mb-6">
          <a href="mailto:hello@espefy.ma" className="text-white">
            <span className="border-b-2 border-beigeA08 inline-block pb-1">hello@espefy.ma</span>
          </a>
        </div>
        <div>
          <ul className="flex justify-center sm:justify-start text-lg">
            <li className="mr-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold">
                <FaFacebookF />
              </a>
            </li>
            <li className="mr-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full text-center mb-1 mt-4 md:mt-12 text-xs text-white">
        © <a className="font-semibold" href="/">Espefy</a> 2024
      </div>
      <div className="w-full text-center text-xs text-white">
        Made with  by <a href="/" target="_blank" className="font-black">Khalid Atyatllah</a>
      </div>
    </footer>
  );
};

export default Footer;
