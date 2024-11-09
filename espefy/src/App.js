// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GiftBoxSPA from './pages/GiftBoxSPA';
import NotFoundPage from './pages/NotFoundPage'; 

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gift-box" element={<GiftBoxSPA />} />
      {/* Catch-all route for undefined paths */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default App;
