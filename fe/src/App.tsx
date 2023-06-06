import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '@pages/Home';
import NeighborhoodSetting from '@pages/NeighborhoodSetting';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/neighborhood-setting" element={<NeighborhoodSetting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
