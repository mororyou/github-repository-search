import { z } from 'zod';
import { zResultItemOwnerSchema } from './_utils/owner';

export const zSearchRepositorySchema = z.object({
  repositoryName: z
    .string()
    .min(1, { message: 'レポジトリ名を入力してください' })
    .max(100, { message: 'レポジトリ名は100文字以内で入力してください' })
    .regex(/^[a-zA-Z0-9]+$/, { message: '半角英数字で入力してください' }),
});

export type SearchRepositorySchema = z.infer<typeof zSearchRepositorySchema>;

export const zSearchRepositoryResultItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  full_name: z.string(),
  owner: zResultItemOwnerSchema.optional(),
  html_url: z.string().url(),
  description: z.string().nullable(),
  stargazers_count: z.number(),
  forks_count: z.number(),
  topics: z.array(z.string()).optional(),
  language: z.string().nullable(),
});

export type SearchRepositoryResultItemSchema = z.infer<
  typeof zSearchRepositoryResultItemSchema
>;

export const zSearchRepositoryResultsSchema = z.object({
  total_count: z.number(),
  items: z.array(zSearchRepositoryResultItemSchema),
  incomplete_results: z.boolean(),
});

export type SearchRepositoryResultsSchema = z.infer<
  typeof zSearchRepositoryResultsSchema
>;
