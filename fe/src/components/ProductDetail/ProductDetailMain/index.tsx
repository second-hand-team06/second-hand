import { useState } from 'react';

import { ICON_NAME, REQUEST_URL } from '@constants/index';
import { getTextWithTimeStamp } from '@utils/index';

import useFetch, { REQUEST_METHOD } from '@hooks/useFetch';

import Icon from '@components/common/Icon';
import Dropdown from '@components/common/Dropdown';
import * as S from './style';

interface Badge {
  id: number;
  state: string;
  backgroundColor: string | null;
  fontColor: string | null;
}

interface BadgesData {
  badges: Badge[];
}

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
  isSeller: boolean;
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
  isSeller,
}: ProductDetailMainProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { fetchData: getBadges, data: badgesData } = useFetch<BadgesData>({
    url: REQUEST_URL.BADGES,
    options: {
      method: REQUEST_METHOD.GET,
      headers: { Authorization: `Bearer ${localStorage.getItem('Token')}` },
    },
    skip: true,
  });

  const openDropdownHandler = async () => {
    if (!badgesData) await getBadges();

    setIsDropdownOpen(!isDropdownOpen);
  };

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

          {isSeller && (
            <S.DropdownToggleButton onClick={openDropdownHandler}>
              <span>{badge.state}</span>
              <Icon name={ICON_NAME.CHEVRON_DOWN} />
              {isDropdownOpen && badgesData && (
                <Dropdown
                  selectedValue={badge.state}
                  options={badgesData.badges.map(({ id, state }) => ({ id, value: state }))}
                ></Dropdown>
              )}
            </S.DropdownToggleButton>
          )}

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
