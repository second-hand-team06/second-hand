import { Link, useSearchParams } from 'react-router-dom';

import { ICON_NAME } from '@constants/index';

import Icon from '@components/common/Icon';
import ProductList from '@components/ProductList';
import * as S from './style';

const CategoryDetail = () => {
  const [searchParams] = useSearchParams();
  const idParams = searchParams.get('id');
  const nameParams = searchParams.get('name');

  return (
    <>
      <S.Header>
        <Link to="/categories">
          <S.BackButton>
            <Icon name={ICON_NAME.CHEVRON_LEFT} />
          </S.BackButton>
        </Link>
        <S.HeaderTitle>{nameParams}</S.HeaderTitle>
        <S.EmptyTag></S.EmptyTag>
      </S.Header>

      <S.ProductListLayout>
        <ProductList categoryId={Number(idParams)} />
      </S.ProductListLayout>
    </>
  );
};

export default CategoryDetail;
