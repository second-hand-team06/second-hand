import { useNavigate } from 'react-router-dom';

import { PATH } from '@constants/path';

import logoImg from '@assets/second-hand-logo.png';
import * as S from './style';

interface ServerErrorProps {
  resetErrorBoundary: () => void;
}

const UnknownError = ({ resetErrorBoundary }: ServerErrorProps) => {
  const navigate = useNavigate();

  const goToHomePageHandler = () => {
    resetErrorBoundary();
    navigate(PATH.HOME);
  };

  return (
    <S.UnknownError>
      <S.LogoImg src={logoImg} alt="second-hand-logo" />
      <S.Message>알 수 없는 오류가 발생했습니다.</S.Message>
      <S.Message>관리자에게 문의해주세요.</S.Message>
      <S.HomeButton onClick={goToHomePageHandler}>Home 페이지로 이동</S.HomeButton>
    </S.UnknownError>
  );
};

export default UnknownError;
