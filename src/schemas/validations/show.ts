import { z } from 'zod';
import { zResultItemOwnerSchema } from './_utils/owner';

export const zShowRepositorySchema = z.object({
  owner: z.string().min(1, { message: 'リポジトリの所有者を入力してください' }),
  repositoryName: z
    .string()
    .min(1, { message: 'リポジトリ名を入力してください' }),
});

export type ShowRepositorySchema = z.infer<typeof zShowRepositorySchema>;

export const zShowRepositoryResultSchema = z.object({
  id: z.number(),
  name: z.string(),
  owner: zResultItemOwnerSchema,
  stargazers_count: z.number(),
  watchers_count: z.number(),
  forks_count: z.number(),
  open_issues_count: z.number(),
  language: z.string().nullable(),
});

export type ShowRepositoryResultSchema = z.infer<
  typeof zShowRepositoryResultSchema
>;
