import { z } from 'zod';

export const zSearchRepositorySchema = z.object({
  repositoryName: z
    .string()
    .min(1, { message: 'レポジトリ名を入力してください' })
    .max(100, { message: 'レポジトリ名は100文字以内で入力してください' })
    .regex(/^[a-zA-Z0-9]+$/, { message: '半角英数字で入力してください' }),
});

export type SearchRepositorySchema = z.infer<typeof zSearchRepositorySchema>;
