import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GiftBoxSPA from './pages/GiftBoxSPA';
import NotFoundPage from './pages/NotFoundPage'; 
import Auth from './pages/Auth';
import Footer from './layouts/Footer';
import NavBar from './layouts/NavBar';

// Import the background image
import bgImage from './assets/images/bg.png';

const App = () => (
  <Router>
    <div 
      style={{
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: '30%', // Scale the image
        backgroundRepeat: 'no-repeat', // No tiling
        backgroundPosition: 'right center', // Align image to the left, center vertically
        minHeight: '100vh', 
        backgroundAttachment: 'fixed'
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gift-box" element={<GiftBoxSPA />} />
        <Route path="/auth" element={<Auth />} /> 
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
