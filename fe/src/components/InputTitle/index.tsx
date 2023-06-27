import { ICON_NAME } from '@constants/index';

import Icon from '@components/common/Icon';
import * as S from './style';

const InputTitle = () => {
  return (
    <S.InputTitleLayout>
      <S.InputTitle placeholder="글 제목"></S.InputTitle>

      <S.CategoryLayout>
        <S.CategoryList>
          <S.CategoryItem>화장품</S.CategoryItem>
          <S.CategoryItem>여성잡화</S.CategoryItem>
          <S.CategoryItem>기타 중고물품</S.CategoryItem>
        </S.CategoryList>
        <Icon name={ICON_NAME.CHEVRON_RIGHT} />
      </S.CategoryLayout>
    </S.InputTitleLayout>
  );
};
export default InputTitle;
