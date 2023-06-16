import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Oauth = () => {
  const navigate = useNavigate();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const codeParam = urlParams.get('code');

  useEffect(() => {
    if (!codeParam) return;
    const getToken = async () => {
      try {
        // todo: useFetch 사용예정
        console.log(codeParam);
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

    getToken();
  }, [location]);

  return <div>loading</div>;
};

export default Oauth;
