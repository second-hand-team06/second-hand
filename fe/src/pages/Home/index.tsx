import { ICON_NAME } from '@constants/index';

import Icon from '@components/common/Icon';
import Header from '@components/common/Header';
import ProductList from '@components/ProductList';
import TabBar from '@components/TabBar';
import * as S from './style';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Header />
      <S.ProductListLayout>
        <ProductList />
      </S.ProductListLayout>
      <TabBar activeTab="home" />
      <Link to="/new-product">
        <S.NewProductButton buttonType="circle">
          <Icon name={ICON_NAME.PLUS} />
        </S.NewProductButton>
      </Link>
    </>
  );
};

export default Home;
