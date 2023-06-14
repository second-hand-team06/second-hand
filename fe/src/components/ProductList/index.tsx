import { useState, useRef, useEffect } from 'react';

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
  const scrollPositionRef = useRef(0);

  const { fetchData, fetchState } = useFetch<PostsApiResponse>({
    url: `http://13.124.150.120:8080/posts?page=${pageNum}&size=10&category=1`,
    method: 'GET',
  });

  const intersectHandler: IntersectionObserverCallback = ([entry]) => {
    if (!entry.isIntersecting) return;

    if (fetchState.state === 'SUCCESS') {
      setPageNum(pageNum + 1);
    }
  };

  const { setTarget } = useIntersectionObserver({ intersectHandler });

  useEffect(() => {
    fetchData();
    scrollPositionRef.current = window.scrollY;
  }, [pageNum]);

  useEffect(() => {
    if (fetchState.state !== 'SUCCESS' || !fetchState.data) return;

    const { posts } = fetchState.data;
    setPostList((previous) => [...previous, ...posts.content]);

    window.scrollTo(0, scrollPositionRef.current);
  }, [fetchState.state, fetchState.data]);

  return (
    <S.ProductList>
      {fetchState.state === 'LOADING' && <h1>Loading</h1>}
      {fetchState.state === 'ERROR' && <h1>Error</h1>}
      {fetchState.state === 'SUCCESS' && fetchState.data && (
        <>
          {postList.map((item) => (
            <ProductListItem key={item.id} {...item} />
          ))}
          {!fetchState.data.posts.last && <div ref={setTarget}></div>}
        </>
      )}
    </S.ProductList>
  );
};

export default ProductList;
