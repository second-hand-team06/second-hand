import { useState } from 'react';
import { ICON_NAME, REQUEST_URL } from '@constants/index';
import useFetch, { REQUEST_METHOD, RESPONSE_STATE } from '@hooks/useFetch';
import Icon from '@components/common/Icon';
import * as S from './style';

interface CategoriesData {
  categories: { id: number; name: string }[];
}

const InputTitle = () => {
  const [title, setTitle] = useState('');
  const [selectCategory, setSelectCategory] = useState(0);
  const token = localStorage.getItem('Token');
  const options: RequestInit = {
    method: REQUEST_METHOD.GET.toString(),
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  };

  const { data } = useFetch<CategoriesData>({
    url: `${REQUEST_URL.CATEGORY_RECOMMENDS}?title=${title}`,
    options,
  });

  const selectCategoryHandler = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    setSelectCategory(idx);
  };

  return (
    <S.InputTitleLayout>
      <S.InputTitle placeholder="글 제목" onChange={(e) => setTitle(e.target.value)}></S.InputTitle>

      <S.CategoryLayout>
        <S.CategoryList>
          {data?.categories.map(({ id, name }, idx) => (
            <S.CategoryItem
              key={id}
              className={selectCategory === idx ? 'active' : ''}
              onClick={(e) => selectCategoryHandler(e, idx)}
            >
              {name}
            </S.CategoryItem>
          ))}
        </S.CategoryList>
        <Icon name={ICON_NAME.CHEVRON_RIGHT} />
      </S.CategoryLayout>
    </S.InputTitleLayout>
  );
};

export default InputTitle;
