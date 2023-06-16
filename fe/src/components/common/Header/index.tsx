import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ICON_NAME } from '@constants/index';

import Icon from '@components/common/Icon';
import * as S from './style';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <S.Header>
      <S.Neighborhoods onClick={() => setIsModalOpen(!isModalOpen)}>
        <span>역삼 1동</span>
        <Icon name={ICON_NAME.CHEVRON_DOWN} />
        {isModalOpen && (
          <S.Modal>
            <S.Menu defaultregion="역삼 1동" region="역삼 1동">
              역삼 1동
            </S.Menu>
            <S.Menu>내 동네 설정하기</S.Menu>
          </S.Modal>
        )}
      </S.Neighborhoods>
      <Link to="/category">
        <Icon name={ICON_NAME.HAMBURGER} />
      </Link>
    </S.Header>
  );
};

export default Header;
