import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { REQUEST_URL } from '@constants/index';

import useFetch, { REQUEST_METHOD } from '@hooks/useFetch';

import ProductDetailHeader from '@components/ProductDetail/ProductDetailHeader';
import ProductDetailMain from '@components/ProductDetail/ProductDetailMain';
import ProductDetailToolBar from '@components/ProductDetail/ProductDetailToolBar';

interface PostDetailData {
  id: number;
  sellerId: number;
  sellerName: string;
  title: string;
  category: string;
  postedAt: string;
  content: string;
  chatCount: number;
  interestCount: number;
  viewCount: number;
  price: number;
  postState: '광고' | '예약 중' | '판매 중' | '판매 완료';
  photoUrls: string[];
  isSeller: boolean;
  interested: boolean;
}

const ProductDetail = () => {
  const { id: postId } = useParams();

  const { responseState, data: postData } = useFetch<PostDetailData>({
    url: `${REQUEST_URL.POSTS}/${postId}`,
    options: {
      method: REQUEST_METHOD.GET,
      headers: { Authorization: `Bearer ${localStorage.getItem('Token')}` },
    },
  });

  const [isInterested, setIsInterested] = useState(false);
  const [interestCount, setInterestCount] = useState(0);

  const { responseState: postInterestedState, fetchData: postInterested } = useFetch({
    url: `${REQUEST_URL.USERS}/${postData?.id}`,
    options: {
      method: REQUEST_METHOD.POST,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    },
    skip: true,
  });
  const { responseState: deleteInterestedState, fetchData: deleteInterested } = useFetch({
    url: `${REQUEST_URL.USERS}/${postData?.id}`,
    options: {
      method: REQUEST_METHOD.DELETE,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    },
    skip: true,
  });

  const registerInterested = async () => {
    await postInterested();

    if (postInterestedState === 'ERROR') {
      alert('관심 상품 등록에 실패했습니다');
      return;
    }

    setIsInterested(true);
    setInterestCount(interestCount + 1);
  };

  const unregisterInterested = async () => {
    await deleteInterested();

    if (deleteInterestedState === 'ERROR') {
      alert('관심 상품 삭제에 실패했습니다');
      return;
    }

    setIsInterested(false);
    setInterestCount(interestCount - 1);
  };

  const updateIsInterestedHandler = () => {
    if (!isInterested) {
      registerInterested();
      return;
    }

    unregisterInterested();
  };

  useEffect(() => {
    setIsInterested(postData?.interested ?? false);
    setInterestCount(postData?.interestCount ?? 0);
  }, [postData]);

  return (
    <>
      {responseState === 'ERROR' && <div>error</div>}
      {responseState === 'LOADING' && <div>loading</div>}
      {responseState === 'SUCCESS' && postData && (
        <>
          <ProductDetailHeader postId={postData.id} isSeller={postData.isSeller} />
          <ProductDetailMain {...postData} interestCount={interestCount} />
          <ProductDetailToolBar
            isInterested={isInterested}
            updateIsInterestedHandler={updateIsInterestedHandler}
            {...postData}
          />
        </>
      )}
    </>
  );
};

export default ProductDetail;
