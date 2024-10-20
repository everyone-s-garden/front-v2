import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

const useOtherManagedGarden = ({
  otherManagedGardensData,
  setNextGardenId,
}: {
  otherManagedGardensData: OtherManagedGardenGetResponses | undefined;
  setNextGardenId: Dispatch<SetStateAction<number>>;
}) => {
  const otherManagedGardensRef = useRef<HTMLDivElement>(null);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    if (otherManagedGardensData && otherManagedGardensData.hasNext) {
      setHasNext(true);
    } else {
      setHasNext(false);
    }
  }, [otherManagedGardensData]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    const onIntersect = async (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && hasNext && otherManagedGardensData) {
        if (otherManagedGardensData.nextManagedGardenId) {
          setNextGardenId(otherManagedGardensData.nextManagedGardenId);
        }
      }
    };

    const observer = new IntersectionObserver(onIntersect, options);

    if (otherManagedGardensRef.current) {
      observer.observe(otherManagedGardensRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasNext, otherManagedGardensData, setNextGardenId]);

  return { otherManagedGardensRef };
};

export default useOtherManagedGarden;
