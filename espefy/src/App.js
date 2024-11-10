// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GiftBoxSPA from './pages/GiftBoxSPA';
import NotFoundPage from './pages/NotFoundPage'; 
import Auth from './pages/Auth'; // Import Auth for sign in, sign up, forget password
import Footer from './layouts/Footer';
import NavBar from './layouts/NavBar'; 

const App = () => (
  <Router>
  <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gift-box" element={<GiftBoxSPA />} />
      <Route path="/auth" element={<Auth />} /> 
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  <Footer />

  </Router>
);

export default App;
