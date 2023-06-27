import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ICON_NAME } from '@constants/iconName';

import Icon from '@components/common/Icon';
import Modal from '@components/common/Modal';
import ModalPortal from '@components/ModalPortal';
import * as S from './style';

interface ProductDetailHeaderProps {
  isSeller: boolean;
}

const ProductDetailHeader = ({ isSeller }: ProductDetailHeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      {isModalOpen && (
        <ModalPortal>
          <Modal
            options={[
              { text: '게시글 수정', colorType: 'default', handler: () => console.log('게시글 수정') },
              { text: '삭제', colorType: 'warning', handler: () => console.log('삭제') },
            ]}
            closeModalHandler={() => setIsModalOpen(false)}
          />
        </ModalPortal>
      )}
    </S.Header>
  );
};

export default ProductDetailHeader;
