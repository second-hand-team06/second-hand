import { useState } from 'react';

import { ICON_NAME } from '@constants/iconName';
import { formatMoney } from '@utils/index';

import Icon from '@components/common/Icon';
import ToastMessage from '@components/ToastMessage';
import * as S from './style';

interface ToolBarProps {
  id: number;
  interested: boolean;
  price: number;
  isSeller: boolean;
  chatCount: number;
  isInterested: boolean;
  updateIsInterestedHandler: () => void;
}

const ProductDetailToolBar = ({
  price,
  isSeller,
  chatCount,
  isInterested,
  updateIsInterestedHandler,
}: ToolBarProps) => {
  const [showAlertMessage, setShowAlertMessage] = useState(false);

  return (
    <S.ToolBar>
      <S.LikeAndPrice>
        <button onClick={updateIsInterestedHandler}>
          <Icon name={isInterested ? ICON_NAME.FULL_LIKE : ICON_NAME.LIKE} />
        </button>
        <span>{formatMoney(price ?? 0)}</span>
      </S.LikeAndPrice>

      {isSeller ? (
        <S.ChattingListButton
          buttonType="rectangle"
          buttonState="active"
          onClick={() => {
            if (isSeller && chatCount === 0) setShowAlertMessage(true);
          }}
        >
          {`대화 중인 채팅방${chatCount > 0 ? ` (${chatCount})` : ''}`}
        </S.ChattingListButton>
      ) : (
        <S.ChattingDetailButton buttonType="rectangle" buttonState="active">
          채팅 하기
        </S.ChattingDetailButton>
      )}

      {showAlertMessage && (
        <ToastMessage message="채팅한 이웃이 없습니다." onClose={() => setShowAlertMessage(false)} />
      )}
    </S.ToolBar>
  );
};

export default ProductDetailToolBar;
