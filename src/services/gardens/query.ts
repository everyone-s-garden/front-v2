import {
  queryOptions,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import gardensAPI from './api';

export const gardensQuery = {
  all: () => ['gardens'] as const,
  details: () => [...gardensQuery.all(), 'detail'],
  forSale: () => [...gardensQuery.all(), 'for-sale'],

  everyGarden: (pageNumber: number) =>
    queryOptions({
      queryKey: [...gardensQuery.all(), pageNumber],
      queryFn: () => gardensAPI.getEveryGardens(pageNumber),
    }),

  individualGarden: (id: number | null) =>
    queryOptions({
      queryKey: [...gardensQuery.details(), id],
      queryFn: () => gardensAPI.getIndividualGarden(id),
    }),

  otherUsersGarden: (userId: number) =>
    queryOptions({
      queryKey: [...gardensQuery.details(), userId],
      queryFn: () => gardensAPI.getOtherUsersGardens(userId),
    }),

  otherUsersGardenForSale: (userId: number) =>
    queryOptions({
      queryKey: [...gardensQuery.forSale(), userId],
      queryFn: () => gardensAPI.getOtherUserGardenForSale(userId),
    }),
};

export const useGetEveryGardens = (pageNumber: number) => {
  return useQuery(gardensQuery.everyGarden(pageNumber));
};

export const useGetIndividualGarden = (id: number | null) => {
  return useQuery(gardensQuery.individualGarden(id));
};

export const useGetMapGardens = (
  type: 'ALL' | 'PUBLIC' | 'PRIVATE',
  map: naver.maps.Map | null,
) => {
  const queryKey = [...gardensQuery.all(), type];
  const queryFn = () => gardensAPI.getGardensInBounds(map, type);

  const { data, refetch } = useQuery({
    queryKey,
    queryFn,
    enabled: map !== null,
  });

  return { data, refetch };
};

export const useGetOtherUsersGardens = (userId: number) => {
  return useQuery(gardensQuery.otherUsersGarden(userId));
};

export const useGetOtherUsersGardenForSale = (userId: number) => {
  return useQuery(gardensQuery.otherUsersGardenForSale(userId));
};

export const useGetGardensScroll = (
  map: naver.maps.Map | null,
  gardenType: 'ALL' | 'PUBLIC' | 'PRIVATE',
  startLat?: number,
  startLong?: number,
  endLat?: number,
  endLong?: number,
) => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [
      ...gardensQuery.all(),
      startLat,
      startLong,
      endLat,
      endLong,
      gardenType,
    ],
    queryFn: ({ pageParam }) =>
      gardensAPI.getGardensInBoundWithScroll(
        gardenType,
        pageParam,
        startLat,
        startLong,
        endLat,
        endLong,
      ),
    enabled: map !== null,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length === 0) {
        return undefined;
      }

      return pages.length;
    },
    select: (data) => {
      const allGardens = data.pages.reduce((acc, page) => {
        acc.push(...page.gardenByComplexesWithScrollResponses);

        return acc;
      }, []);

      return { ...data, allGardens };
    },
  });

  return { data, fetchNextPage, hasNextPage };
};
