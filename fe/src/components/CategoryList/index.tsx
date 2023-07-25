import { ICON_NAME, REQUEST_URL } from '@constants/index';

import useFetch, { REQUEST_METHOD } from '@hooks/useFetch';

import Icon from '@components/common/Icon';
import { Category } from '@pages/NewProduct';
import * as S from './style';

interface CategoriesData {
  categories: Category[];
}

interface CategoryListProps {
  category: Category;
  onCategoryToggleClick: () => void;
  onCategorySelectClick: (category: Category) => void;
}

const CategoryList = ({ category, onCategoryToggleClick, onCategorySelectClick }: CategoryListProps) => {
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
        <S.CloseButton onClick={onCategoryToggleClick}>
          <Icon name={ICON_NAME.CHEVRON_LEFT} />
          <span>닫기</span>
        </S.CloseButton>
        <S.HeaderTitle>카테고리</S.HeaderTitle>
        <S.EmptyTag />
      </S.Header>
      {responseState === 'SUCCESS' && (
        <S.CategoryListLayout>
          {data?.categories.map(({ id, name }) => (
            <S.CategoryItem
              key={id}
              className={category.id === id ? 'active' : ''}
              onClick={() => {
                onCategorySelectClick({ id, name });
                onCategoryToggleClick();
              }}
            >
              {name}
            </S.CategoryItem>
          ))}
        </S.CategoryListLayout>
      )}
    </S.CategoryList>
  );
};

export default CategoryList;
