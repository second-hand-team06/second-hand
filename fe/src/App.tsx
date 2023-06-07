import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from './context/themeContext';

import Home from '@pages/Home';
import NeighborhoodSetting from '@pages/NeighborhoodSetting';

import GlobalStyle from '@styles/GlobalStyle';

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/neighborhood-setting" element={<NeighborhoodSetting />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
