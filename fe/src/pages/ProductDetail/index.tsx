import { useParams } from 'react-router-dom';

import { REQUEST_URL } from '@constants/index';

import useFetch, { REQUEST_METHOD } from '@hooks/useFetch';

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

  return (
    <>
      {responseState === 'ERROR' && <div>error</div>}
      {responseState === 'LOADING' && <div>loading</div>}
      {responseState === 'SUCCESS' && postData && (
        <>
          <ProductDetailMain {...postData} />
          <ProductDetailToolBar {...postData} />
        </>
      )}
    </>
  );
};

export default ProductDetail;
