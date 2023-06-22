import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { REQUEST_METHOD, RESPONSE_STATE } from '@constants/index';

import useFetch from '@hooks/useFetch';

interface TokenData {
  token: string;
}

const LoginLoading = () => {
  const navigate = useNavigate();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const codeParam = urlParams.get('code');

  const { responseState, data } = useFetch<TokenData>({
    url: `http://13.124.150.120:8080/oauth?code=${codeParam}`,
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
