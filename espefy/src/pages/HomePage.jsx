import React from 'react';
import Header from '../layouts/Header';
import AboutUs from '../layouts/AboutUs';  
import NavBar from '../layouts/NavBar';  // Ensure NavBar is imported here

const HomePage = () => (
  <div className="flex flex-col min-h-screen ">
    <Header /> 
    <main className="flex-grow container mx-auto px-4 py-8 text-center">
     <AboutUs />
    </main>
  </div>
);

export default HomePage;
