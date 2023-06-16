import TabBar from '@components/TabBar';

import * as S from './style';

const MyAccount = () => {
  const CLIENT_ID = '50e7f2067dc2cf55aa36';
  const GITHUB_OAUTH_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user%20public_repo`;

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
