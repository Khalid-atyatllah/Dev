// C:\Users\hp 850 G 5\Documents\react\espefy\src\pages\HomePage.jsx
import React from 'react';
import Header from '../layouts/Header';

const HomePage = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow container mx-auto p-8">
      <h1 className="text-3xl text-white font-bold mb-4">Welcome to Our Gift Box Store</h1>
      <p className="mb-4 text-white">Select the perfect gift for any occasion!</p>
    </main>
  </div>
);

export default HomePage;
