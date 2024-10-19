import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

const useOtherManagedGarden = ({
  otherManagedGardensData,
  setNextGardenId,
}: {
  otherManagedGardensData: OtherManagedGardenGetResponses | undefined;
  setNextGardenId: Dispatch<SetStateAction<number>>;
}) => {
  const otherManagedGardensRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    const onIntersect = async (entries: IntersectionObserverEntry[]) => {
      if (
        entries[0].isIntersecting &&
        otherManagedGardensData?.nextManagedGardenId &&
        otherManagedGardensData?.hasNext
      ) {
        setNextGardenId(otherManagedGardensData?.nextManagedGardenId);
      }
    };

    const observer = new IntersectionObserver(onIntersect, options);

    if (otherManagedGardensRef.current) {
      observer.observe(otherManagedGardensRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [
    otherManagedGardensData?.hasNext,
    otherManagedGardensData?.nextManagedGardenId,
    setNextGardenId,
  ]);

  return { otherManagedGardensRef };
};

export default useOtherManagedGarden;
