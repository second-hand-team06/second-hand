import { Link } from 'react-router-dom';

import { ICON_NAME, REQUEST_METHOD, RESPONSE_STATE } from '@constants/index';

import useFetch from '@hooks/useFetch';

import Icon from '@components/common/Icon';
import * as S from './style';

interface Category {
  id: number;
  name: string;
  photoUrl: string;
}

interface CategoriesData {
  categories: Category[];
}

const Category = () => {
  const { responseState, data } = useFetch<CategoriesData>({
    url: 'http://13.124.150.120:8080/categories',
    method: REQUEST_METHOD.GET,
  });

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
      {responseState === RESPONSE_STATE.SUCCESS &&
        data?.categories.map((item) => (
          <S.CategoryItem key={item.id}>
            <S.CategoryImg src={item.photoUrl} />
            <span>{item.name}</span>
          </S.CategoryItem>
        ))}
    </>
  );
};

export default Category;
