import { useState, useEffect } from 'react';

import { REQUEST_URL } from '@constants/requestUrl';

import useFetch, { RESPONSE_STATE, REQUEST_METHOD } from '@hooks/useFetch';
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

type PostListState = ProductListItemProps[];

interface ProductListContainerProps {
  isLoading?: boolean;
  isLastPage?: boolean;
  postList: ProductListItemProps[];
  setTarget?: (node: HTMLDivElement) => void;
}

const ProductListContainer = ({
  isLoading = false,
  isLastPage = false,
  postList,
  setTarget,
}: ProductListContainerProps) => {
  if (postList.length === 0) {
    return <S.ProductNotFound>해당 상품이 없어요.</S.ProductNotFound>;
  }

  return (
    <>
      {postList.map((item) => (
        <ProductListItem key={item.id} {...item} />
      ))}
      {!isLoading && !isLastPage && <S.Target ref={setTarget}></S.Target>}
      {isLoading && (
        <S.SpinnerLayout>
          <Spinner />
        </S.SpinnerLayout>
      )}
    </>
  );
};

const ProductList = ({ regionId, categoryId }: ProductListProps) => {
  const INIT_PAGE_NUM = 0;
  const INIT_POST_LIST: ProductListItemProps[] = [];
  const [pageNum, setPageNum] = useState(INIT_PAGE_NUM);
  const [postList, setPostList] = useState<PostListState>(INIT_POST_LIST);

  const token = localStorage.getItem('Token');
  const requestUrl = `${REQUEST_URL.POSTS}?page=${pageNum}&size=10&region=${regionId}${
    categoryId ? `&category=${categoryId}` : ''
  }`;

  const { fetchData, responseState, data, error } = useFetch<PostsData>({
    url: requestUrl,
    options: {
      method: REQUEST_METHOD.GET,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    },
    skip: true,
  });

  const intersectHandler = () => {
    if (responseState !== RESPONSE_STATE.SUCCESS || data?.posts.last) return;

    setPageNum((previousPageNum) => previousPageNum + 1);
  };
  const { setTarget } = useIntersectionObserver({ intersectHandler });

  useEffect(() => {
    setPageNum(INIT_PAGE_NUM);
    setPostList(INIT_POST_LIST);
  }, [regionId]);

  useEffect(() => {
    fetchData();
  }, [pageNum]);

  useEffect(() => {
    if (responseState !== RESPONSE_STATE.SUCCESS || !data) return;

    setPostList((previous) => [...previous, ...data.posts.content]);
  }, [responseState, data]);

  if (responseState === RESPONSE_STATE.ERROR) throw error;

  return (
    <S.ProductList>
      {responseState === RESPONSE_STATE.SUCCESS && data && (
        <ProductListContainer
          postList={postList}
          isLoading={false}
          isLastPage={data.posts.last}
          setTarget={setTarget}
        />
      )}

      {responseState === RESPONSE_STATE.LOADING && (
        <>
          {postList.length > 0 ? (
            <ProductListContainer isLoading={true} postList={postList} />
          ) : (
            <Loading text="상품 목록을 불러오고 있습니다." />
          )}
        </>
      )}
    </S.ProductList>
  );
};

export default ProductList;
