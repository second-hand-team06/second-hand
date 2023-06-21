import { ICON_NAME } from '@constants/index';

import Icon from '@components/common/Icon';
import * as S from './style';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <S.Header>
      <Link to="/">
        <S.BackButton>
          <Icon name={ICON_NAME.CHEVRON_LEFT} />
          <span>뒤로</span>
        </S.BackButton>
      </Link>
      <S.Title>카테고리</S.Title>
      <S.EmptyTag></S.EmptyTag>
    </S.Header>
  );
};

export default Category;
