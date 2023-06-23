import TabBar from '@components/TabBar';

import * as S from './style';

const MyAccount = () => {
  const CLIENT_ID =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_PROD_CLIENT_ID
      : process.env.REACT_APP_DEV_CLIENT_ID;

  const REDIRECT_URL =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_PROD_REDIRECT_URL
      : process.env.REACT_APP_DEV_REDIRECT_URL;

  const GITHUB_OAUTH_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_url=${REDIRECT_URL}&scope=user%20public_repo`;

  const loginRequestHandler = () => {
    return window.location.assign(GITHUB_OAUTH_URL);
  };

  return (
    <S.MyAccount>
      <S.LoginButton onClick={loginRequestHandler}>GitHub 계정으로 로그인</S.LoginButton>
      <TabBar activeTab="myAccount" />
    </S.MyAccount>
  );
};

export default MyAccount;
