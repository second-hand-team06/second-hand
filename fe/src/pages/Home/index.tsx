import { ICON_NAME } from '@constants/index';

import Icon from '@components/common/Icon';
import TabBar from '@components/TabBar';
import ProductList from '@components/ProductList';
import * as S from './style';

const Home = () => {
  return (
    <div>
      <S.NavigationBar>
        <S.NeighborhoodSettingLink>
          <span>역삼 1동</span>
          <Icon name={ICON_NAME.CHEVRON_DOWN} />
        </S.NeighborhoodSettingLink>
        <Icon name={ICON_NAME.HAMBURGER} />
      </S.NavigationBar>
      <ProductList />
      <TabBar activeTab="home" />
    </div>
  );
};

export default Home;
