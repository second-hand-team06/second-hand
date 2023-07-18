import { CustomError } from '@utils/index';
import { useEffect, useState } from 'react';

type ErrorState = CustomError | null;

interface UseInfiniteLoadingProps<T> {
  getData: ({ page }: { page: number }) => Promise<{ items: T[]; last: boolean; error: ErrorState }>;
  initPage?: number;
}

const useInfiniteLoading = <T>({ getData, initPage = 0 }: UseInfiniteLoadingProps<T>) => {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorState>(null);
  const [page, setPage] = useState<number>(initPage);
  const [isLastPage, setIsLastPage] = useState(false);

  const loadItems = async () => {
    if (loading || isLastPage) return;

    setLoading(true);

    const data = await getData({ page });

    if (data.error) {
      setError(data.error);
      return;
    }
    setLoading(false);
    setIsLastPage(data.last);
    setItems((prevItems) => [...prevItems, ...data.items]);
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    loadItems();
  }, []);

  return { items, loading, isLastPage, loadItems, error };
};

export default useInfiniteLoading;
