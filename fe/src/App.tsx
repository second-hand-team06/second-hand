import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@context/themeContext';

import { PATH } from './constants';

import Home from '@pages/Home';
import RegionSetting from '@pages/RegionSetting';
import Category from '@pages/Category';
import CategoryDetail from '@pages/CategoryDetail';
import Sales from '@pages/Sales';
import Interests from '@pages/Interests';
import Chatting from '@pages/Chatting';
import MyAccount from '@pages/MyAccount';
import LoginLoading from '@pages/LoginLoading';
import NewProduct from '@pages/NewProduct';
import NotFound from '@pages/NotFound';

import GlobalStyle from '@styles/GlobalStyle';

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index path={PATH.HOME} element={<Home />} />
          <Route path={PATH.REGION_SETTING} element={<RegionSetting />} />
          <Route path={PATH.CATEGORY} element={<Category />} />
          <Route path={PATH.CATEGORY_DETAIL} element={<CategoryDetail />} />
          <Route path={PATH.SALES} element={<Sales />} />
          <Route path={PATH.INTERESTS} element={<Interests />} />
          <Route path={PATH.CHATTING} element={<Chatting />} />
          <Route path={PATH.MY_ACCOUNT} element={<MyAccount />} />
          <Route path={PATH.LOGIN_LOADING} element={<LoginLoading />} />
          <Route path={PATH.NEW_PRODUCT} element={<NewProduct />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
