import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useFetch from '@hooks/useFetch';

const LoginLoading = () => {
  const navigate = useNavigate();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const codeParam = urlParams.get('code');

  const { fetchState } = useFetch<string>({
    url: `http://13.124.150.120:8080/oauth?code=${codeParam}`,
    method: 'GET',
  });

  useEffect(() => {
    const { data: token } = fetchState;

    if (token && !localStorage.getItem('Token')) {
      localStorage.setItem('Token', token);
      navigate('/');
    }
  }, [fetchState.data]);

  return <div>loading</div>;
};

export default LoginLoading;
