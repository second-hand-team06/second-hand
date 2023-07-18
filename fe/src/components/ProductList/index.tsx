import { REQUEST_URL } from '@constants/requestUrl';
import { CustomError } from '@utils/index';

import { REQUEST_METHOD } from '@hooks/useFetch';
import useInfiniteLoading from '@hooks/useInfiniteLoading';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

import Spinner from '@components/common/Spinner';
import ProductListItem, { ProductListItemProps } from '@components/ProductListItem';
import Loading from '@components/Loading';
import * as S from './style';

interface PostsData {
  posts: { content: ProductListItemProps[]; last: boolean };
}

interface ProductListProps {
  regionId: number;
  categoryId?: number;
}

interface ErrorResponse {
  code: number;
  message: string;
}

const getProductList = async ({
  page,
  regionId,
  categoryId,
}: {
  page: number;
  regionId: number;
  categoryId?: number;
}) => {
  try {
    const token = localStorage.getItem('Token');
    const requestUrl = `${REQUEST_URL.POSTS}?page=${page}&size=10&region=${regionId}${
      categoryId ? `&category=${categoryId}` : ''
    }`;

    const response = await fetch(requestUrl, {
      method: REQUEST_METHOD.GET,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });

    if (!response.ok) {
      const { code, message }: ErrorResponse = await response.json();
      throw new CustomError(code, message);
    }
    const { data }: { data: PostsData } = await response.json();

    return { items: data.posts.content, last: data.posts.last, error: null };
  } catch (error) {
    return { items: [], last: false, error: error as CustomError };
  }
};

const ProductList = ({ regionId, categoryId }: ProductListProps) => {
  const {
    items: productList,
    loading,
    isLastPage,
    loadItems,
    error,
  } = useInfiniteLoading<ProductListItemProps>({
    getData: ({ page }) => getProductList({ page, regionId, categoryId }),
  });

  const { setTarget } = useIntersectionObserver({ intersectHandler: () => loadItems() });

  if (error) throw error;

  const ProductListItems = productList.map((item) => <ProductListItem key={item.id} {...item} />);

  return (
    <S.ProductList>
      {loading && productList.length === 0 && <Loading text="상품 목록을 불러오고 있습니다." />}
      {loading && productList.length > 0 && (
        <>
          {ProductListItems}
          <S.SpinnerLayout>
            <Spinner />
          </S.SpinnerLayout>
        </>
      )}
      {!loading && productList.length === 0 && <S.ProductNotFound>해당 상품이 없어요.</S.ProductNotFound>}
      {!loading && productList.length > 0 && (
        <>
          {ProductListItems}
          {!isLastPage && <S.Target ref={setTarget}></S.Target>}
        </>
      )}
    </S.ProductList>
  );
};

export default ProductList;
