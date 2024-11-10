import React, { useState } from 'react';
import QuickViewModal from './QuickViewModal'; // Ensure the path is correct

const BoxSingleProduct = ({ productName, productImage, productDescription, productPrice }) => {
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
        <p className="mt-3 text-lg font-medium text-white">
          {productPrice}
          <span className="text-gold"> MAD</span>
        </p>
      </div>

      <div className="absolute bottom-6 left-0 right-0 px-4 flex justify-between gap-4">
        {/* Add to Cart Icon */}
<button class="text-white text-2xl p-2 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg></button>

        {/* View Details Icon - Trigger Modal */}
        <button
          onClick={handleOpenModal}
          className="text-white text-2xl p-2 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
        >
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
          </svg>
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

export default BoxSingleProduct;
