import { Link } from 'react-router-dom';

import { ICON_NAME, PATH } from '@constants/index';

import Icon from '@components/common/Icon';
import * as S from './style';

interface TabBarProps {
  activeTab: 'home' | 'sales' | 'interests' | 'chatting' | 'myAccount';
}

const TabBar = ({ activeTab }: TabBarProps) => {
  return (
    <S.TabBar>
      <Link to={PATH.HOME}>
        <S.Tab name="home" activetab={activeTab}>
          <Icon name={ICON_NAME.HOME} size={22} />
          <span>홈</span>
        </S.Tab>
      </Link>
      <Link to={PATH.SALES}>
        <S.Tab name="sales" activetab={activeTab}>
          <Icon name={ICON_NAME.NEWSPAPER} size={20}/>
          <span>판매내역</span>
        </S.Tab>
      </Link>
      <Link to={PATH.INTERESTS}>
        <S.Tab name="interests" activetab={activeTab}>
          <Icon name={ICON_NAME.LIKE} size={20}/>
          <span>관심목록</span>
        </S.Tab>
      </Link>
      <Link to={PATH.CHATTING}>
        <S.Tab name="chatting" activetab={activeTab}>
          <Icon name={ICON_NAME.MESSAGE} size={20}/>
          <span>채팅</span>
        </S.Tab>
      </Link>
      <Link to={PATH.MY_ACCOUNT}>
        <S.Tab name="myAccount" activetab={activeTab}>
          <Icon name={ICON_NAME.PERSON} size={20}/>
          <span>내 계정</span>
        </S.Tab>
      </Link>
    </S.TabBar>
  );
};

export default TabBar;
