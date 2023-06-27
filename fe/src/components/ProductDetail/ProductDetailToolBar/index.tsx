import { useState } from 'react';

import { ICON_NAME } from '@constants/iconName';
import { formatMoney } from '@utils/index';

import Icon from '@components/common/Icon';
import ToastMessage from '@components/ToastMessage';
import * as S from './style';

interface ToolBarProps {
  interested: boolean;
  price: number;
  isSeller: boolean;
  chatCount: number;
}

const ProductDetailToolBar = ({ interested, price, isSeller, chatCount }: ToolBarProps) => {
  const [showAlertMessage, setShowAlertMessage] = useState(false);

  const openAlertMessage = () => {
    if (isSeller && chatCount === 0) setShowAlertMessage(true);
  };

  const closeAlertMessage = () => setShowAlertMessage(false);

  return (
    <S.ToolBar>
      <S.LikeAndPrice>
        <Icon name={interested ? ICON_NAME.FULL_LIKE : ICON_NAME.LIKE} />
        <span>{formatMoney(price ?? 0)}</span>
      </S.LikeAndPrice>

      {isSeller ? (
        <S.ChattingListButton buttonType="rectangle" buttonState="active" clickHandler={openAlertMessage}>
          {`대화 중인 채팅방${chatCount > 0 ? ` (${chatCount})` : ''}`}
        </S.ChattingListButton>
      ) : (
        <S.ChattingDetailButton buttonType="rectangle" buttonState="active">
          채팅 하기
        </S.ChattingDetailButton>
      )}

      {showAlertMessage && (
        <ToastMessage message="채팅한 이웃이 없습니다." closeHandler={closeAlertMessage} />
      )}
    </S.ToolBar>
  );
};

export default ProductDetailToolBar;
