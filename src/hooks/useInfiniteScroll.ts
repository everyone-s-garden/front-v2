import { useEffect, useRef } from 'react';

interface useInfiniteScrollProps {
  fetchData: () => void;
  hasNextPage: boolean;
}

const useInfiniteScroll = <T extends HTMLElement>({
  fetchData,
  hasNextPage,
}: useInfiniteScrollProps) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    const onIntersect = async (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchData();
      }
    };

    const observer = new IntersectionObserver(onIntersect, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [fetchData, hasNextPage]);

  return { ref };
};

export default useInfiniteScroll;
