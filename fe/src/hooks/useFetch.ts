import React, { useState, useEffect } from 'react';

interface FetchOptions {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: object | null;
}

const useFetch = ({ url, method = 'GET', body = null }: FetchOptions) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);

      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (method !== 'GET') {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Fetch failed for URL: ${url}`);
      }

      const result = await response.json();

      setData(result.data);
    } catch (err) {
      if (err instanceof Error) setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { fetchData, data, error, loading };
};

export default useFetch;
