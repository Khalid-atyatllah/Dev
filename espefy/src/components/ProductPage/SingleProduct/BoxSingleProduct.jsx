import React from 'react';

const BoxSingleProduct = ({ productName, productImage, productDescription, productPrice }) => {
  return (
    <div className="group relative p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-100 group-hover:opacity-90 transition-opacity duration-300">
        <img
          src={productImage}
          alt={productName}
          className="h-48 w-full object-cover object-center rounded-t-md"
        />
      </div>
      <div className="mt-4 flex flex-col items-center text-center">
        <h3 className="text-md font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200">
          {productName}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{productDescription}</p>
        <p className="mt-3 text-lg font-medium text-gray-900">{productPrice}</p>
      </div>
      <button
        className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-500 transition-colors duration-200"
        type="button"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default BoxSingleProduct;
