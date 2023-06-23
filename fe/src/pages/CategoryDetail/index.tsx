import { useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { ICON_NAME, PATH } from '@constants/index';

import Icon from '@components/common/Icon';
import ProductList from '@components/ProductList';
import * as S from './style';

const CategoryDetail = () => {
  const [searchParams] = useSearchParams();
  const idParams = searchParams.get('id');
  const nameParams = searchParams.get('name');
  const listRef = useRef<HTMLDivElement | null>(null);

  const goToTopHandler = () => {
    listRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <S.Header>
        <Link to={PATH.CATEGORY}>
          <S.BackButton>
            <Icon name={ICON_NAME.CHEVRON_LEFT} />
          </S.BackButton>
        </Link>
        <S.HeaderTitle>{nameParams}</S.HeaderTitle>
        <S.EmptyTag></S.EmptyTag>
      </S.Header>

      <S.ProductListLayout ref={listRef}>
        <ProductList categoryId={Number(idParams)} />
      </S.ProductListLayout>

      <S.GoToTopButton onClick={goToTopHandler}>
        <Icon name={ICON_NAME.ARROW_UP} />
      </S.GoToTopButton>
    </>
  );
};

export default CategoryDetail;
