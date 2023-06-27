import { useNavigate } from 'react-router-dom';

import { ICON_NAME } from '@constants/iconName';

import Icon from '@components/common/Icon';
import * as S from './style';

interface ProductDetailHeaderProps {
  isSeller: boolean;
}

const ProductDetailHeader = ({ isSeller }: ProductDetailHeaderProps) => {
  const navigate = useNavigate();
  return (
    <S.Header>
      <button onClick={() => navigate(-1)}>
        <Icon name={ICON_NAME.CHEVRON_LEFT} />
      </button>
      {isSeller && <Icon name={ICON_NAME.ELLIPSIS} />}
    </S.Header>
  );
};

export default ProductDetailHeader;
