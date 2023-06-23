import { ICON_NAME } from '@constants/index';

import Icon from '@components/common/Icon';
import ImageInput from '@components/ImageIput';
import * as S from './style';


const NewProduct = () => {
  return (
    <S.NewProduct>
      <S.Header>
        <S.CloseButton>닫기</S.CloseButton>
        <S.HeaderTitle>내 물건 팔기</S.HeaderTitle>
        <S.CompleteButton>완료</S.CompleteButton>
      </S.Header>

      <ImageInput></ImageInput>

      <S.TabBar>
        <S.RegionSettingButton>
          <Icon name={ICON_NAME.REGION_SETTING} fill="black" />
          <span>역삼1동</span>
        </S.RegionSettingButton>
        <S.Keyboard>
          <Icon name={ICON_NAME.KEYBOARD} fill="black" />
        </S.Keyboard>
      </S.TabBar>
    </S.NewProduct>
  );
};

export default NewProduct;
