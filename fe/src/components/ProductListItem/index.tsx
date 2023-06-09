import React from 'react';

import Icon from '@components/common/Icon';
import * as S from './style';

export interface ProductListItemProps {
  id?: number;
  title: string;
  photoUrl: string | null;
  region: string;
  postedAt: string;
  status: string;
  price: number;
  chattingCount: number;
  interestCount: number;
}

const ProductListItem = ({
  id,
  title,
  photoUrl,
  region,
  postedAt,
  status,
  price,
  chattingCount = 0,
  interestCount = 0,
}: ProductListItemProps) => {
  return (
    <S.ProductListItem>
      {photoUrl && <img src={photoUrl} alt={title} />}
      <S.ItemInformation>
        <S.Title>{title}</S.Title>
        <S.LocationAndTime>{`${region} ${postedAt}`}</S.LocationAndTime>
        <S.StateAndPrice>
          {status !== '0' && <S.StateBadge>예약중</S.StateBadge>}
          <S.Price>{`${price}원`}</S.Price>
        </S.StateAndPrice>
        <S.ChatAndLike>
          {chattingCount > 0 && (
            <S.IconTextBox>
              <Icon name="message" />
              <span>{chattingCount}</span>
            </S.IconTextBox>
          )}
          {interestCount > 0 && (
            <S.IconTextBox>
              <Icon name="like" />
              <span>{interestCount}</span>
            </S.IconTextBox>
          )}
        </S.ChatAndLike>
      </S.ItemInformation>
    </S.ProductListItem>
  );
};

export default ProductListItem;
