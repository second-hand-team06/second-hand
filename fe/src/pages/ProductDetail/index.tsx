import { ICON_NAME } from '@constants/index';

import Icon from '@components/common/Icon';
import * as S from './style';

const ProductDetail = () => {
  return (
    <>
      <S.Header>
        <Icon name={ICON_NAME.CHEVRON_LEFT} />
        <Icon name={ICON_NAME.ELLIPSIS} />
      </S.Header>
      <S.ProductInfo>
        <S.SellerInfo>
          <span>판매자 정보</span>
          <span>아켄</span>
        </S.SellerInfo>
      </S.ProductInfo>
    </>
  );
};

export default ProductDetail;
