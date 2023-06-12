import { useState } from 'react';

import useFetch from '@hooks/useFetch';

import ProductListItem, { ProductListItemProps } from '@components/ProductListItem';
import * as S from './style';

interface PostsApiResponse {
  posts: { content: ProductListItemProps[] };
}

const ProductList = () => {
  const [pageNum, setPageNum] = useState(0);

  const { fetchState } = useFetch<PostsApiResponse>({
    url: `http://13.124.150.120:8080/posts?page=${pageNum}&size=10&category=1`,
    method: 'GET',
  });

  return (
    <S.ProductList>
      {fetchState.state === 'LOADING' && <h1>Loading</h1>}
      {fetchState.state === 'ERROR' && fetchState.error && <h1>Error</h1>}
      {fetchState.data &&
        fetchState.data.posts.content.map((item) => <ProductListItem key={item.id} {...item} />)}
    </S.ProductList>
  );
};

export default ProductList;
