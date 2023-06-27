import { useState } from 'react';

import { ICON_NAME } from '@constants/index';
import { getTextWithTimeStamp } from '@utils/index';

import Icon from '@components/common/Icon';
import * as S from './style';

interface ProductDetailMainProps {
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
}

const ProductDetailMain = ({
  sellerName,
  title,
  category,
  postedAt,
  content,
  chatCount,
  interestCount,
  viewCount,
  postState,
  photoUrls,
}: ProductDetailMainProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <S.Product>
        <S.ProductImgListLayout>
          <S.ProductImgList>
            <S.ProductImg src={photoUrls[0]} />
          </S.ProductImgList>
        </S.ProductImgListLayout>

        <S.ProductInfo>
          <S.SellerInfo>
            <span>판매자 정보</span>
            <span>{sellerName}</span>
          </S.SellerInfo>

          <S.PostStateDropDown onClick={() => setIsModalOpen(!isModalOpen)}>
            <span>{postState}</span>
            <Icon name={ICON_NAME.CHEVRON_DOWN} />
            {isModalOpen && (
              <S.Modal>
                {['예약 중', '판매 중', '판매 완료'].map((state) => (
                  <S.Menu key={state} selectedstate={postState} state={state}>
                    {state}
                  </S.Menu>
                ))}
              </S.Modal>
            )}
          </S.PostStateDropDown>

          <S.Title>{title}</S.Title>

          <S.CategoryAndTime>
            {getTextWithTimeStamp({ text: category ?? '', time: postedAt ?? '' })}
          </S.CategoryAndTime>

          <S.Content>{content}</S.Content>

          <S.CountLayout>
            <S.Count>채팅 {chatCount}</S.Count>
            <S.Count>관심 {interestCount}</S.Count>
            <S.Count>조회 {viewCount}</S.Count>
          </S.CountLayout>
        </S.ProductInfo>
      </S.Product>
    </>
  );
};

export default ProductDetailMain;
