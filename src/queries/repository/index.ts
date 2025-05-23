import { getRepositories } from '@/server/repositories/repository';
import { atom } from 'jotai';
import { atomWithInfiniteQuery } from 'jotai-tanstack-query';
import { repositoryKeys } from './keys';

export const keywordAtom = atom<string>('');

export const perPage = 10;

export const repositoriesAtom = atomWithInfiniteQuery((get) => {
  const keyword = get(keywordAtom);
  return {
    queryKey: repositoryKeys.search(keyword),
    queryFn: async ({ pageParam = 1 }) => {
      return await getRepositories({
        repositoryName: keyword,
        page: pageParam as number,
      });
    },
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (
        lastPage.data?.total_count &&
        allPages.length * perPage >= lastPage.data?.total_count
      ) {
        return undefined;
      }
      return (lastPageParam as number) + 1;
    },
    initialPageParam: 1,
    enabled: !!keyword,
    staleTime: 0,
  };
});
