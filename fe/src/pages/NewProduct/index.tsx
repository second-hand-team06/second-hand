import { ICON_NAME } from '@constants/index';

import Icon from '@components/common/Icon';
import * as S from './style';

const NewProduct = () => {
  return (
    <S.NewProduct>
      <S.Header>
        <S.CloseButton>닫기</S.CloseButton>
        <S.HeaderTitle>내 물건 팔기</S.HeaderTitle>
        <S.CompleteButton>완료</S.CompleteButton>
      </S.Header>

      <S.TabBar>
        <S.RegionSetting>
          <Icon name={ICON_NAME.REGION_SETTING} fill="black" width={20} height={18} />
          역삼1동
        </S.RegionSetting>
        <S.Keyboard>
          <Icon name={ICON_NAME.KEYBOARD} fill="black" width={20} height={18} />
        </S.Keyboard>
      </S.TabBar>
    </S.NewProduct>
  );
};

export default NewProduct;
