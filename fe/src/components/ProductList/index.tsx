import { useState, useEffect } from 'react';

import { REQUEST_URL } from '@constants/requestUrl';

import useFetch, { RESPONSE_STATE, REQUEST_METHOD } from '@hooks/useFetch';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

import ProductListItem, { ProductListItemProps } from '@components/ProductListItem';
import * as S from './style';

interface PostsData {
  posts: { content: ProductListItemProps[]; last: boolean };
}

interface ProductListProps {
  categoryId?: number;
}

const ProductList = ({ categoryId }: ProductListProps) => {
  const [pageNum, setPageNum] = useState(0);
  const [postList, setPostList] = useState<ProductListItemProps[]>([]);

  const { fetchData, responseState, data } = useFetch<PostsData>({
    url: `${REQUEST_URL.POSTS}?page=${pageNum}&size=10${categoryId ? `&category=${categoryId}` : ''}`,
    method: REQUEST_METHOD.GET,
  });

  const intersectHandler: IntersectionObserverCallback = ([entry]) => {
    if (!entry.isIntersecting) return;

    if (responseState === RESPONSE_STATE.SUCCESS && !data?.posts.last) {
      setPageNum((previousPageNum) => previousPageNum + 1);
    }
  };

  const { setTarget } = useIntersectionObserver({ intersectHandler });

  useEffect(() => {
    if (pageNum > 0) fetchData();
  }, [pageNum]);

  useEffect(() => {
    if (responseState !== RESPONSE_STATE.SUCCESS || !data) return;

    setPostList((previous) => [...previous, ...data.posts.content]);
  }, [responseState, data]);

  return (
    <S.ProductList>
      {responseState === RESPONSE_STATE.SUCCESS && data && (
        <>
          {postList.length > 0 ? (
            postList.map((item) => <ProductListItem key={item.id} {...item} />)
          ) : (
            <S.ProductNotFound>해당 상품이 없어요.</S.ProductNotFound>
          )}

          {!data.posts.last && <S.Target ref={setTarget}></S.Target>}
        </>
      )}

      {responseState === RESPONSE_STATE.LOADING && (
        <>
          {postList.length > 0 ? (
            <>
              {postList.map((item) => (
                <ProductListItem key={item.id} {...item} />
              ))}
              <div>로딩 중 ~</div>
            </>
          ) : (
            <h1>Loading</h1>
          )}
        </>
      )}

      {responseState === RESPONSE_STATE.ERROR && <h1>Error</h1>}
    </S.ProductList>
  );
};

export default ProductList;
