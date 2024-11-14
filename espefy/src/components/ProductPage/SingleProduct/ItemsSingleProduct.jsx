import React, { useState } from 'react';
import { FaShoppingCart, FaEye } from 'react-icons/fa';
import QuickViewModal from './QuickViewModal'; // Ensure the path is correct

const ItemsSingleProduct = ({ productName, productImage, productDescription, productPrice }) => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open the modal
  const handleOpenModal = () => {
    console.log("Opening modal...");
    setIsModalOpen(true); // This opens the modal
  };

  // Close the modal
  const handleCloseModal = () => {
    console.log("Closing modal...");
    setIsModalOpen(false); // This closes the modal
  };

  return (
    <div className="group relative p-6  bg-beigeB2 rounded-xl border-2 border-brown432 shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <div className="w-full h-60 overflow-hidden rounded-lg mb-4">
        <img
          src={productImage}
          alt={productName}
          className="w-full h-full object-cover object-center transform transition-all duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="text-center text-white">
        <h3 className="text-lg font-semibold text-brown432 mb-2">{productName}</h3>
        <p className="text-sm text-white mb-3">{productDescription}</p>
        <p className="mt-3 text-lg font-medium text-white">
          {productPrice}
          <span className="text-gold"> MAD</span>
        </p>
      </div>

      <div className="absolute bottom-6 left-0 right-0 px-4 flex justify-between gap-4">
        {/* Add to Cart Icon */}
        <button className="text-white text-2xl p-2 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
          <FaShoppingCart />
        </button>
        {/* View Details Icon - Trigger Modal */}
        <button
          onClick={handleOpenModal}
          className="text-white text-2xl p-2 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
        >
          <FaEye />
        </button>
      </div>

      {/* QuickViewModal */}
      <QuickViewModal
        isOpen={isModalOpen}
        product={{ productName, productImage, productDescription, productPrice }}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ItemsSingleProduct;
