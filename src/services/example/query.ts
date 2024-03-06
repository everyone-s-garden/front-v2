import { queryOptions, useQuery } from '@tanstack/react-query';
import exampleAPI from './api';

/** 쿼리 키 팩토리 + 옵션
 * 이 key들을 활용해 낙관적 업데이트, 캐시 삭제 등을 할 수 있음
 * all: default key, 모든 데이터를 관리
 * -s: 특정 데이터를 관리
 * -: 하나의 데이터를 관리
 */
export const exampleQueries = {
  all: () => ['example'] as const,
  details: () => [...exampleQueries.all(), 'detail'],
  detail: (id: number) =>
    queryOptions({
      queryKey: [...exampleQueries.details(), id],
      queryFn: () => exampleAPI.getExampleData(id),
    }),
};

/** 커스텀 훅 내보내기 */
export const useGetExample = (id: number) => {
  return useQuery(exampleQueries.detail(id));
};
