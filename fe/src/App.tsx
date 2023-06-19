import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@context/themeContext';

import Home from '@pages/Home';
import NeighborhoodSetting from '@pages/NeighborhoodSetting';
import Category from '@pages/Category';
import Sales from '@pages/Sales';
import Interests from '@pages/Interests';
import Chatting from '@pages/Chatting';
import MyAccount from '@pages/MyAccount';
import Oauth from '@pages/Oauth';
import NewProduct from '@pages/NewProduct';

import GlobalStyle from '@styles/GlobalStyle';

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/neighborhood-setting" element={<NeighborhoodSetting />} />
          <Route path="/category" element={<Category />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/chatting" element={<Chatting />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/oauth" element={<Oauth />} />
          <Route path="/new-product" element={<NewProduct />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
