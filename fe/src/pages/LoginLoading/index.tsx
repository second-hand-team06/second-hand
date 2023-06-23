import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { REQUEST_URL } from '@constants/requestUrl';

import useFetch, { REQUEST_METHOD, RESPONSE_STATE } from '@hooks/useFetch';

interface TokenData {
  token: string;
}

const LoginLoading = () => {
  const navigate = useNavigate();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const codeParam = urlParams.get('code');

  const { responseState, data } = useFetch<TokenData>({
    url: `${REQUEST_URL.OAUTH}?code=${codeParam}`,
    method: REQUEST_METHOD.GET,
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('Token');

    if (isLoggedIn) navigate('/');

    if (responseState !== RESPONSE_STATE.SUCCESS || !data) return;

    const { token } = data;

    if (token) {
      localStorage.setItem('Token', token);
    }

    navigate('/');
  }, [responseState, data]);

  return <div>loading</div>;
};

export default LoginLoading;
