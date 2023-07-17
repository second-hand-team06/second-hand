import { useNavigate } from 'react-router-dom';

import { useUserContext } from '@context/userContext';
import { PATH } from '@constants/path';

import Popup from '@components/common/Popup';
import * as S from './style';

interface AuthErrorProps {
  resetErrorBoundary: () => void;
}

const AuthorizationError = ({ resetErrorBoundary }: AuthErrorProps) => {
  const { logout } = useUserContext();
  const navigate = useNavigate();

  const goToLoginPageHandler = () => {
    logout();
    resetErrorBoundary();
    navigate(PATH.MY_ACCOUNT);
  };

  return (
    <Popup text="다시 로그인해주세요.">
      <S.LoginPageButton onClick={goToLoginPageHandler}>로그인 페이지로 이동</S.LoginPageButton>
    </Popup>
  );
};

export default AuthorizationError;
