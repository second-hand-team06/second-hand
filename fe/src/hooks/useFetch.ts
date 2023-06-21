import { useState, useEffect } from 'react';

import { RESPONSE_STATE, REQUEST_METHOD } from '@constants/index';

type ResponseState = (typeof RESPONSE_STATE)[keyof typeof RESPONSE_STATE];
type DataState<T> = null | T;
type ErrorState = null | Error;
type Method = (typeof REQUEST_METHOD)[keyof typeof REQUEST_METHOD];

interface UseFetchProps {
  url: string;
  method?: Method;
  body?: object | null;
}

const useFetch = <T>({ url, method = REQUEST_METHOD.GET, body = null }: UseFetchProps) => {
  const [responseState, setResponseState] = useState<ResponseState>(RESPONSE_STATE.IDLE);
  const [data, setData] = useState<DataState<T>>(null);
  const [error, setError] = useState<ErrorState>(null);
  const token = localStorage.getItem('Token');

  const fetchData = async () => {
    try {
      setResponseState(RESPONSE_STATE.LOADING);

      const options: RequestInit = {
        method,
        headers: {},
      };

      if (token) {
        options.headers = { Authorization: `Bearer ${token}` };
      }

      if (
        method === REQUEST_METHOD.PATCH ||
        method === REQUEST_METHOD.POST ||
        method === REQUEST_METHOD.PUT
      ) {
        if (!options.body) {
          throw new Error(`Request failed for ${method} ${url}. Please provide a valid request body.`);
        }

        options.body = JSON.stringify(body);
        options.headers = { 'Content-Type': 'application/json' };
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Request failed for ${method} ${url}. Status: ${response.status}.`);
      }

      const result = await response.json();

      // todo: 백엔드와 데이터 형식 협의
      if (result.token) {
        setResponseState(RESPONSE_STATE.SUCCESS);
        setData(result.token);
        setError(null);
        return;
      }

      setResponseState(RESPONSE_STATE.SUCCESS);
      setData(result.data);
      setError(null);
    } catch (err) {
      setResponseState(RESPONSE_STATE.ERROR);
      setData(null);
      setError(err as Error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { fetchData, responseState, data, error };
};

export default useFetch;