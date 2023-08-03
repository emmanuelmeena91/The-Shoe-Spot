import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ShopNow from './ShopNow';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shopnow" element={<ShopNow />} />
    </Routes>
  );
};

export default AppRoutes;