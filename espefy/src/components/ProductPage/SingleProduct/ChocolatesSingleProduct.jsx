import React from 'react';
import { FaShoppingCart, FaEye } from 'react-icons/fa';

const ChocolatesSingleProduct = ({ productName, productImage, productDescription, productPrice }) => {
  return (
    <div className="group relative p-6 bg-black rounded-xl border-2 border-white shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <div className="w-full h-60 overflow-hidden rounded-lg mb-4">
        <img
          src={productImage}
          alt={productName}
          className="w-full h-full object-cover object-center transform transition-all duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="text-center text-white">
        <h3 className="text-lg font-semibold text-white mb-2">{productName}</h3>
        <p className="text-sm text-gray-400 mb-3">{productDescription}</p>
        <p className="mt-3 text-lg font-medium text-white">{productPrice}
          <span className="text-gold"> MAD</span>
        </p>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 px-4 flex justify-between gap-4">
        {/* Add to Cart Icon */}
        <button className="text-white text-2xl p-2 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
          <FaShoppingCart />
        </button>
        {/* View Details Icon */}
        <button className="text-white text-2xl p-2 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
          <FaEye />
        </button>
      </div>
    </div>
  );
};

export default ChocolatesSingleProduct;
