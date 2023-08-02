import { useNavigate } from 'react-router-dom';

import { PATH } from '@constants/path';

import logoImg from '@assets/second-hand-logo.png';
import * as S from './style';

interface ServerErrorProps {
  resetErrorBoundary: () => void;
}

const ServerError = ({ resetErrorBoundary }: ServerErrorProps) => {
  const navigate = useNavigate();

  return (
    <S.ServerError>
      <S.LogoImg src={logoImg} alt="second-hand-logo" />
      <S.Message>일시적인 서버 오류가 발생했습니다.</S.Message>
      <S.Message>잠시 후에 다시 시도해주세요.</S.Message>
      <S.HomeButton
        onClick={() => {
          resetErrorBoundary();
          navigate(PATH.HOME);
        }}
      >
        Home 페이지로 이동
      </S.HomeButton>
    </S.ServerError>
  );
};

export default ServerError;
