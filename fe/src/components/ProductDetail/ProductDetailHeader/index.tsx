import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ICON_NAME } from '@constants/index';

import Icon from '@components/common/Icon';
import Modal from '@components/common/Modal';
import Popup from '@components/common/Popup';
import ModalPortal from '@components/ModalPortal';
import * as S from './style';

interface ProductDetailHeaderProps {
  isSeller: boolean;
}

const ProductDetailHeader = ({ isSeller }: ProductDetailHeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);

  const navigate = useNavigate();

  return (
    <S.Header>
      <button onClick={() => navigate(-1)}>
        <Icon name={ICON_NAME.CHEVRON_LEFT} />
      </button>
      {isSeller && (
        <button onClick={() => setIsModalOpen(true)}>
          <Icon name={ICON_NAME.ELLIPSIS} />
        </button>
      )}
      {isPopupOpen && (
        <ModalPortal>
          <Popup text="정말로 해당 게시물을 삭제할 것입니까?">
            <S.ClosePopupButton onClick={() => setIsPopupOpen(false)}>아니오</S.ClosePopupButton>
            <S.DeletePostButton>예</S.DeletePostButton>
          </Popup>
        </ModalPortal>
      )}
      {isModalOpen && (
        <ModalPortal>
          <Modal
            options={[
              { text: '게시글 수정', colorType: 'default', handler: () => console.log('게시글 수정') },
              { text: '삭제', colorType: 'warning', handler: openPopup },
            ]}
            closeModalHandler={() => setIsModalOpen(false)}
          />
        </ModalPortal>
      )}
    </S.Header>
  );
};

export default ProductDetailHeader;
