import { useState, useEffect } from 'react';

import useFetch from '@hooks/useFetch';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

import ProductListItem, { ProductListItemProps } from '@components/ProductListItem';
import * as S from './style';

interface PostsApiResponse {
  posts: { content: ProductListItemProps[]; last: boolean };
}

const ProductList = () => {
  const [pageNum, setPageNum] = useState(0);
  const [postList, setPostList] = useState<ProductListItemProps[]>([]);

  const { fetchData, fetchState } = useFetch<PostsApiResponse>({
    url: `http://13.124.150.120:8080/posts?page=${pageNum}&size=10`,
    method: 'GET',
  });

  const intersectHandler: IntersectionObserverCallback = ([entry]) => {
    if (!entry.isIntersecting) return;

    if (fetchState.state === 'SUCCESS' && !fetchState.data?.posts.last) {
      setPageNum((previousPageNum) => previousPageNum + 1);
    }
  };

  const { setTarget } = useIntersectionObserver({ intersectHandler });

  useEffect(() => {
    if (pageNum > 0) fetchData();
  }, [pageNum]);

  useEffect(() => {
    if (fetchState.state !== 'SUCCESS' || !fetchState.data) return;

    const { posts } = fetchState.data;
    setPostList((previous) => [...previous, ...posts.content]);
  }, [fetchState.state, fetchState.data]);

  return (
    <S.ProductList>
      {fetchState.state === 'SUCCESS' && fetchState.data && (
        <>
          {postList.map((item) => (
            <ProductListItem key={item.id} {...item} />
          ))}
          {!fetchState.data.posts.last && <S.Target ref={setTarget}></S.Target>}
        </>
      )}

      {fetchState.state === 'LOADING' && (
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

      {fetchState.state === 'ERROR' && <h1>Error</h1>}
    </S.ProductList>
  );
};

export default ProductList;
