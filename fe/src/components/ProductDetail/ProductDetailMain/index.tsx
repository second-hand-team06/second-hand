import { useState } from 'react';

import { ICON_NAME } from '@constants/index';
import { getTextWithTimeStamp } from '@utils/index';

import Icon from '@components/common/Icon';
import Dropdown from '@components/common/Dropdown';
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
  badge: { id: number; state: string };
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
  badge,
  photoUrls,
}: ProductDetailMainProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

          <Dropdown
            selectedValue={badge.state}
            options={['예약 중', '판매 중', '판매 완료'].map((state) => ({ id: state, value: state }))}
            isDropdownOpen={isDropdownOpen}
            openDropdownHandler={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <S.DropdownToggleButton>
              <span>{badge.state}</span>
              <Icon name={ICON_NAME.CHEVRON_DOWN} />
            </S.DropdownToggleButton>
          </Dropdown>

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
