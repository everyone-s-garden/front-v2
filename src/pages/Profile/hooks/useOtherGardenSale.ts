import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

const useOtherGardenSale = ({
  otherGardensForSaleData,
  setNextGardenForSaleId,
}: {
  otherGardensForSaleData: OtherGardenGetResponse | undefined;
  setNextGardenForSaleId: Dispatch<SetStateAction<number>>;
}) => {
  const otherGardensForSaleDataRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    const onIntersect = async (entries: IntersectionObserverEntry[]) => {
      if (
        entries[0].isIntersecting &&
        otherGardensForSaleData?.nextGardenId &&
        otherGardensForSaleData?.hasNext
      ) {
        setNextGardenForSaleId(otherGardensForSaleData?.nextGardenId);
      }
    };

    const observer = new IntersectionObserver(onIntersect, options);

    if (otherGardensForSaleDataRef.current) {
      observer.observe(otherGardensForSaleDataRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [
    otherGardensForSaleData?.hasNext,
    otherGardensForSaleData?.nextGardenId,
    setNextGardenForSaleId,
  ]);

  return { otherGardensForSaleDataRef };
};

export default useOtherGardenSale;
