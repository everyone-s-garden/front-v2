import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

const useOtherGardenSale = ({
  otherGardensForSaleData,
  setNextGardenForSaleId,
}: {
  otherGardensForSaleData: OtherGardenGetResponse | undefined;
  setNextGardenForSaleId: Dispatch<SetStateAction<number>>;
}) => {
  const otherGardensForSaleDataRef = useRef<HTMLDivElement>(null);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    if (otherGardensForSaleData && otherGardensForSaleData.hasNext) {
      setHasNext(true);
    } else {
      setHasNext(false);
    }
  }, [otherGardensForSaleData]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    const onIntersect = async (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && hasNext && otherGardensForSaleData) {
        if (otherGardensForSaleData.nextGardenId) {
          setNextGardenForSaleId(otherGardensForSaleData.nextGardenId);
        }
      }
    };

    const observer = new IntersectionObserver(onIntersect, options);

    if (otherGardensForSaleDataRef.current) {
      observer.observe(otherGardensForSaleDataRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [[hasNext, otherGardensForSaleData, setNextGardenForSaleId]]);

  return { otherGardensForSaleDataRef };
};

export default useOtherGardenSale;
