import { ICON_NAME, REQUEST_URL } from '@constants/index';

import useFetch, { REQUEST_METHOD } from '@hooks/useFetch';

import Icon from '@components/common/Icon';
import * as S from './style';

interface Category {
  id: number;
  name: string;
}

interface CategoriesData {
  categories: Category[];
}

interface CategoryListProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CategoryList = ({ onClick }: CategoryListProps) => {
  const { responseState, data } = useFetch<CategoriesData>({
    url: REQUEST_URL.CATEGORY,
    options: {
      method: REQUEST_METHOD.GET,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    },
  });

  return (
    <S.CategoryList>
      <S.Header>
        <S.CloseButton onClick={onClick}>
          <Icon name={ICON_NAME.CHEVRON_LEFT} />
          <span>닫기</span>
        </S.CloseButton>
        <S.HeaderTitle>카테고리</S.HeaderTitle>
        <S.EmptyTag />
      </S.Header>
      {responseState === 'SUCCESS' && (
        <S.CategoryListLayout>
          {data?.categories.map(({ id, name }) => (
            <S.CategoryItem key={id}>{name}</S.CategoryItem>
          ))}
        </S.CategoryListLayout>
      )}
    </S.CategoryList>
  );
};

export default CategoryList;
