export const repositoryKeys = {
  search: (keyword: string) => ['search', keyword],
  show: (id: string) => ['show', id],
} as const;

export type RepositoryKeys = keyof typeof repositoryKeys;
