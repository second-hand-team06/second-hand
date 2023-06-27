import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { ICON_NAME, REQUEST_URL } from '@constants/index';
import { getTextWithTimeStamp, formatMoney } from '@utils/index';

import useFetch, { REQUEST_METHOD } from '@hooks/useFetch';

import Icon from '@components/common/Icon';
import * as S from './style';

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
  seller: boolean;
}

const ProductDetail = () => {
  const { id: postId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      {responseState === 'SUCCESS' && (
        <>
          <S.Header>
            <Icon name={ICON_NAME.CHEVRON_LEFT} />
            <Icon name={ICON_NAME.ELLIPSIS} />
          </S.Header>

          <S.Product>
            <S.ProductImgListLayout>
              <S.ProductImgList>
                <S.ProductImg src={postData?.photoUrls[0]} />
              </S.ProductImgList>
            </S.ProductImgListLayout>

            <S.ProductInfo>
              <S.SellerInfo>
                <span>판매자 정보</span>
                <span>{postData?.sellerName}</span>
              </S.SellerInfo>

              <S.PostStateDropDown onClick={() => setIsModalOpen(!isModalOpen)}>
                <span>{postData?.postState}</span>
                <Icon name={ICON_NAME.CHEVRON_DOWN} />
                {isModalOpen && (
                  <S.Modal>
                    {['예약 중', '판매 중', '판매 완료'].map((state) => (
                      <S.Menu key={state} selectedstate={postData?.postState} state={state}>
                        {state}
                      </S.Menu>
                    ))}
                  </S.Modal>
                )}
              </S.PostStateDropDown>

              <S.Title>{postData?.title}</S.Title>

              <S.CategoryAndTime>
                {getTextWithTimeStamp({ text: postData?.category ?? '', time: postData?.postedAt ?? '' })}
              </S.CategoryAndTime>

              <S.Content>{postData?.content}</S.Content>

              <S.CountLayout>
                <S.Count>채팅 {postData?.chatCount}</S.Count>
                <S.Count>관심 {postData?.interestCount}</S.Count>
                <S.Count>조회 {postData?.viewCount}</S.Count>
              </S.CountLayout>
            </S.ProductInfo>
          </S.Product>

          <S.ToolBar>
            <S.LikeAndPrice>
              <Icon name={ICON_NAME.LIKE} />
              <span>{formatMoney(postData?.price ?? 0)}</span>
            </S.LikeAndPrice>

            <S.ChattingButton buttonType="rectangle" buttonState="active">
              대화 중인 채팅방
            </S.ChattingButton>
          </S.ToolBar>
        </>
      )}
    </>
  );
};

export default ProductDetail;
