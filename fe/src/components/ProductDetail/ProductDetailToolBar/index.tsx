import { useState } from 'react';

import { ICON_NAME } from '@constants/iconName';
import { formatMoney } from '@utils/index';

import useFetch, { REQUEST_METHOD } from '@hooks/useFetch';

import Icon from '@components/common/Icon';
import ToastMessage from '@components/ToastMessage';
import * as S from './style';
import { REQUEST_URL } from '@constants/requestUrl';

interface ToolBarProps {
  id: number;
  interested: boolean;
  price: number;
  isSeller: boolean;
  chatCount: number;
}

const ProductDetailToolBar = ({ id, interested, price, isSeller, chatCount }: ToolBarProps) => {
  const [isInterested, setIsInterested] = useState(interested);
  const [showAlertMessage, setShowAlertMessage] = useState(false);

  const { responseState: postInterestedState, fetchData: postInterested } = useFetch({
    url: `${REQUEST_URL.USERS}/${id}`,
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
    url: `${REQUEST_URL.USERS}/${id}`,
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
  };

  const unregisterInterested = async () => {
    await deleteInterested();

    if (deleteInterestedState === 'ERROR') {
      alert('관심 상품 삭제에 실패했습니다');
      return;
    }

    setIsInterested(false);
  };

  const clickLikeButtonHandler = () => {
    if (!isInterested) {
      registerInterested();
      return;
    }

    unregisterInterested();
  };

  const openAlertMessage = () => {
    if (isSeller && chatCount === 0) setShowAlertMessage(true);
  };

  const closeAlertMessage = () => setShowAlertMessage(false);

  return (
    <S.ToolBar>
      <S.LikeAndPrice>
        <button onClick={clickLikeButtonHandler}>
          <Icon name={isInterested ? ICON_NAME.FULL_LIKE : ICON_NAME.LIKE} />
        </button>
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
