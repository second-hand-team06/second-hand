import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginLoading = () => {
  const navigate = useNavigate();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const codeParam = urlParams.get('code');

  const getToken = async () => {
    try {
      // todo: useFetch 사용예정
      const response = await fetch(`http://13.124.150.120:8080/oauth?code=${codeParam}`);
      const { token } = await response.json();

      if (token && !localStorage.getItem('Token')) {
        localStorage.setItem('Token', token);
      }

      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!codeParam) return;

    getToken();
  }, []);

  return <div>loading</div>;
};

export default LoginLoading;
