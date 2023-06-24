import { useState } from 'react';

import { ICON_NAME } from '@constants/index';

import { getTextWithTimeStamp, formatMoney } from '@utils/index';

import Icon from '@components/common/Icon';
import * as S from './style';

const ProductDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <S.Header>
        <Icon name={ICON_NAME.CHEVRON_LEFT} />
        <Icon name={ICON_NAME.ELLIPSIS} />
      </S.Header>

      <S.Product>
        <S.ProductImg src="https://image.yes24.com/goods/86234361/XL" />

        <S.ProductInfo>
          <S.SellerInfo>
            <span>판매자 정보</span>
            <span>아켄</span>
          </S.SellerInfo>

          <S.PostStateDropDown onClick={() => setIsModalOpen(!isModalOpen)}>
            <span>판매 중</span>
            <Icon name={ICON_NAME.CHEVRON_DOWN} />
            {isModalOpen && (
              <S.Modal>
                {['예약 중', '판매 중', '판매 완료'].map((state) => (
                  <S.Menu key={state} selectedstate={'판매 중'} state={state}>
                    {state}
                  </S.Menu>
                ))}
              </S.Modal>
            )}
          </S.PostStateDropDown>

          <S.Title>빈티지 롤러 스케이트</S.Title>

          <S.CategoryAndTime>
            {getTextWithTimeStamp({ text: '가구/인테리어', time: new Date() })}
          </S.CategoryAndTime>

          <S.Content>
            {
              '어린시절 추억의 향수를 불러 일으키는 롤러 스케이트입니다. 빈티지 특성상 사용감 있지만 전체적으로 깨끗한 상태입니다.\n\n 촬영용 소품이나, 거실에 장식용으로 추천해 드립니다. 단품 입고 되었습니다. 새제품으로 보존된 제품으로 전용박스까지 보내드립니다.\n\n 사이즈는 235 입니다.'
            }
          </S.Content>

          <S.CountLayout>
            <S.Count>채팅 0</S.Count>
            <S.Count>관심 0</S.Count>
            <S.Count>조회 1</S.Count>
          </S.CountLayout>
        </S.ProductInfo>
      </S.Product>

      <S.ToolBar>
        <S.LikeAndPrice>
          <Icon name={ICON_NAME.LIKE} />
          <span>{formatMoney(169000)}</span>
        </S.LikeAndPrice>

        <S.ChattingButton buttonType="rectangle" buttonState="active">
          대화 중인 채팅방
        </S.ChattingButton>
      </S.ToolBar>
    </>
  );
};

export default ProductDetail;
