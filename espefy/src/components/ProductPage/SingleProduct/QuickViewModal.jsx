import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Button from '../../Button';  
const QuickViewModal = ({ isOpen, product, onClose }) => {
  // If modal is not open, return null
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg flex justify-center items-center">
      <div className="relative bg-black border-2 border-white rounded-lg p-6 w-4/5 max-w-4xl">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-xl">
          <FaTimes />
        </button>
        
        {/* Product Details */}
        <div className="flex gap-6">
          {/* Image */}
          <div className="w-1/3">
            <img
              src={product.productImage}
              alt={product.productName}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Info */}
          <div className="w-2/3 text-white">
            <h2 className="text-2xl font-semibold mb-4">{product.productName}</h2>
            <p className="text-gray-400 mb-4">{product.productDescription}</p>
            <p className="text-lg font-medium mb-6">{product.productPrice}
              <span className="text-gold"> MAD</span>
            </p>



            {/* Using Button Component */}
            <Button
              onClick={() => console.log('Added to Cart')}
          className="w-[90%] self-center mt-auto"

            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
