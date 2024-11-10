import React from 'react';
import Button from '../Button';
import Color from './filter/color';
import Size from './filter/size';
import Sort from './filter/Sort';
import GridViewButton from './filter/GridViewButton';
import BoxSingleProduct from './SingleProduct/BoxSingleProduct'; 


const ProductPage = ({ title, onContinue, onBack }) => (
  <div className="p-6 bg-black text-white rounded shadow-md">
    {/* Header */}
    <div className="flex items-baseline justify-between border-b border-gray-600 pb-6 pt-24">
      <h1 className="text-4xl font-bold tracking-tight text-white">{title}</h1>
      <div className="flex items-center">
        <Sort />
        <GridViewButton />
      </div>
    </div>

    {/* Content Layout */}
    <div className="flex h-auto mt-6">
      {/* Sidebar - Filter Section */}
      <div className="w-3/10 py-6 pr-4">
        <Color />
        <Size />
      </div>

      {/* products */}
      <div className="w-7/10  bg-black p-4 rounded-lg">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <BoxSingleProduct
      productName="Basic Tee"
      productImage="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg"
      productDescription="Aspen White"
      productPrice="$35"
    />
  </div>


      </div>
    </div>

    <div className="flex mt-4 space-x-2">
      
      <Button onClick={onContinue} className=" ml-auto">
        Continue to Chocolates
      </Button>
      
    </div>
  </div>
);

export default ProductPage;






