import { Link } from 'react-router-dom';

import { ICON_NAME, PATH } from '@constants/index';

import Icon from '@components/common/Icon';
import ImageInput from '@components/ImageInput';
import * as S from './style';
import InputTitle from '@components/InputTitle';

const NewProduct = () => {
  return (
    <S.NewProduct>
      <S.Header>
        <Link to={PATH.HOME}>
          <S.CloseButton>닫기</S.CloseButton>
        </Link>
        <S.HeaderTitle>내 물건 팔기</S.HeaderTitle>
        <Link to={PATH.PRODUCT_DETAIL}>
          <S.CompleteButton>완료</S.CompleteButton>
        </Link>
      </S.Header>

      <S.LayoutContent>
        <ImageInput />
        <InputTitle />
        <S.TextInput placeholder="₩ 가격 (선택사항)" />
        <S.TextArea placeholder="역삼1동에 올릴 게시물 내용을 작성해주세요.(판매금지 물품은 게시가 제한될 수 있어요.)" />
      </S.LayoutContent>
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
