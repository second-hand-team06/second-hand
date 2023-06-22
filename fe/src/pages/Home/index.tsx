import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { ICON_NAME } from '@constants/index';

import Icon from '@components/common/Icon';
import Header from '@components/common/Header';
import ProductList from '@components/ProductList';
import TabBar from '@components/TabBar';
import * as S from './style';

const Home = () => {
  const listRef = useRef<HTMLDivElement | null>(null);

  const goToTopHandler = () => {
    listRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header type="home" />
      <S.ProductListLayout ref={listRef}>
        <ProductList />
      </S.ProductListLayout>

      <TabBar activeTab="home" />

      <S.GoToTopButton onClick={goToTopHandler}>
        <Icon name={ICON_NAME.ARROW_UP} />
      </S.GoToTopButton>

      <Link to="/new-product">
        <S.NewProductButton buttonType="circle">
          <Icon name={ICON_NAME.PLUS} />
        </S.NewProductButton>
      </Link>
    </>
  );
};

export default Home;
