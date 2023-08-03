import { useEffect } from 'react';

import ModalPortal from '@components/ModalPortal';
import * as S from './style';

interface ToastMessageProps {
  message: string;
  onClose: () => void;
}

const ToastMessage = ({ message, onClose }: ToastMessageProps) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      onClose();
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <ModalPortal>
      <S.NoChatMessage>{message}</S.NoChatMessage>
    </ModalPortal>
  );
};

export default ToastMessage;
