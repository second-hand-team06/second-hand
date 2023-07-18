import { useEffect, useState } from 'react';

interface UseIntersectionObserverProps {
  intersectHandler: () => void;
  root?: null;
  rootMargin?: string;
  threshold?: number;
}

const useIntersectionObserver = ({
  intersectHandler,
  root = null,
  rootMargin = '0px',
  threshold = 0,
}: UseIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLDivElement | null | undefined>(null);

  const callback: IntersectionObserverCallback = ([entry]) => {
    if (!entry.isIntersecting) return;

    intersectHandler();
  };

  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver(callback, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(target);

    return () => observer.disconnect();
  }, [target, intersectHandler, root, rootMargin, threshold]);

  return { setTarget };
};

export default useIntersectionObserver;
