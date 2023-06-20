import { useState, useEffect } from 'react';

interface UseFetchState<T> {
  state: 'IDLE' | 'LOADING' | 'ERROR' | 'SUCCESS';
  data: null | T;
  error: null | Error;
}

interface UseFetchProps {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: object | null;
}

const useFetch = <T>({ url, method = 'GET', body = null }: UseFetchProps) => {
  const [fetchState, setFetchState] = useState<UseFetchState<T>>({ state: 'IDLE', data: null, error: null });
  const token = localStorage.getItem('Token');

  const fetchData = async () => {
    try {
      setFetchState((previous) => ({ ...previous, state: 'LOADING' }));

      const options: RequestInit = {
        method,
        headers: {},
      };

      if (token) {
        options.headers = { Authorization: `Bearer ${token}` };
      }

      if (['POST', 'PUT', 'PATCH'].includes(method) && !options.body) {
        throw new Error('body가 없습니다')
      }

      if (body) {
        options.body = JSON.stringify(body);
        options.headers = { 'Content-Type': 'application/json' };
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const result = await response.json();

      // todo: 백엔드와 데이터 형식 협의
      if (result.token) {
        setFetchState({ state: 'SUCCESS', data: result.token, error: null });
        return;
      }

      setFetchState({ state: 'SUCCESS', data: result.data, error: null });
    } catch (err) {
      setFetchState({ state: 'ERROR', data: null, error: err as Error });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { fetchData, fetchState };
};

export default useFetch;
