import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ICON_NAME, REQUEST_METHOD, RESPONSE_STATE } from '@constants/index';

import useFetch from '@hooks/useFetch';

import Icon from '@components/common/Icon';
import ProductList from '@components/ProductList';
import * as S from './style';

interface Category {
  id: number;
  name: string;
  photoUrl: string;
}

interface CategoriesData {
  categories: Category[];
}

type ClickedCategoryState<T> = null | T;

const Category = () => {
  const [clickedCategory, setClickedCategory] =
    useState<ClickedCategoryState<{ id: number; name: string }>>(null);

  const { responseState, data } = useFetch<CategoriesData>({
    url: 'http://13.124.150.120:8080/categories',
    method: REQUEST_METHOD.GET,
  });

  if (clickedCategory) {
    return (
      <>
        <S.Header>
          <S.BackButton onClick={() => setClickedCategory(null)}>
            <Icon name={ICON_NAME.CHEVRON_LEFT} />
          </S.BackButton>
          <S.HeaderTitle>{clickedCategory.name}</S.HeaderTitle>
          <S.EmptyTag></S.EmptyTag>
        </S.Header>
        <ProductList categoryId={clickedCategory.id} />
      </>
    );
  }

  return (
    <>
      <S.Header>
        <Link to="/">
          <S.BackButton>
            <Icon name={ICON_NAME.CHEVRON_LEFT} />
            <span>뒤로</span>
          </S.BackButton>
        </Link>
        <S.HeaderTitle>카테고리</S.HeaderTitle>
        <S.EmptyTag></S.EmptyTag>
      </S.Header>

      {responseState === RESPONSE_STATE.LOADING && <div>loading</div>}
      {responseState === RESPONSE_STATE.ERROR && <div>error</div>}
      {responseState === RESPONSE_STATE.SUCCESS && (
        <S.CategoryList>
          {data?.categories.map(({ id, name, photoUrl }) => (
            <S.CategoryItem key={id} onClick={() => setClickedCategory({ id, name })}>
              <S.CategoryImg src={photoUrl} alt={name} />
              <span>{name}</span>
            </S.CategoryItem>
          ))}
        </S.CategoryList>
      )}
    </>
  );
};

export default Category;
