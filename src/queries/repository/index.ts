import { getRepositories } from '@/server/repositories/repository';
import { atomWithMutation } from 'jotai-tanstack-query';

export const repositoriesAtom = atomWithMutation(() => ({
  mutationFn: async ({
    repositoryName,
    page,
  }: {
    repositoryName: string;
    page: number;
  }) => {
    return await getRepositories({ repositoryName, page });
  },
}));
