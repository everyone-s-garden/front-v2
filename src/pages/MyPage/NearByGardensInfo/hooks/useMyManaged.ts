import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { MyManagedGardenGetResponses } from '../../type';

const useMyManaged = ({
  myManagedGardensData,
  setNextGardenId,
}: {
  myManagedGardensData: MyManagedGardenGetResponses | undefined;
  setNextGardenId: Dispatch<SetStateAction<number>>;
}) => {
  const myManagedGardensRef = useRef<HTMLDivElement>(null);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    if (myManagedGardensData && myManagedGardensData.hasNext) {
      setHasNext(true);
    } else {
      setHasNext(false);
    }
  }, [myManagedGardensData]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    const onIntersect = async (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && hasNext && myManagedGardensData) {
        if (myManagedGardensData.nextMyManagedGardenId) {
          setNextGardenId(myManagedGardensData.nextMyManagedGardenId);
        }
      }
    };

    const observer = new IntersectionObserver(onIntersect, options);

    if (myManagedGardensRef.current) {
      observer.observe(myManagedGardensRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasNext, myManagedGardensData, setNextGardenId]);

  return { myManagedGardensRef };
};

export default useMyManaged;
