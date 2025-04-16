import { z } from 'zod';

export const zShowRepositorySchema = z.object({
  owner: z.string().min(1, { message: 'リポジトリの所有者を入力してください' }),
  repositoryName: z
    .string()
    .min(1, { message: 'リポジトリ名を入力してください' }),
});

export type ShowRepositorySchema = z.infer<typeof zShowRepositorySchema>;
