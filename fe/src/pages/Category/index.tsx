import { ICON_NAME } from '@constants/index';

import Icon from '@components/common/Icon';
import * as S from './style';

const Category = () => {
  return (
    <S.Header>
      <S.BackButton>
        <Icon name={ICON_NAME.CHEVRON_LEFT} />
        <span>뒤로</span>
      </S.BackButton>
      <S.Title>카테고리</S.Title>
      <S.EmptyTag></S.EmptyTag>
    </S.Header>
  );
};

export default Category;
