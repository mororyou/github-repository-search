import { z } from 'zod';

export const zShowRepositorySchema = z.object({
  owner: z
    .string()
    .regex(/^[a-zA-Z0-9]+$/, {
      message: 'リポジトリの所有者は、半角英数字で入力してください',
    })
    .min(1, { message: 'リポジトリの所有者を入力してください' }),
  repositoryName: z
    .string()
    .regex(/^[a-zA-Z0-9]+$/, {
      message: 'リポジトリ名は、半角英数字で入力してください',
    })
    .min(1, { message: 'リポジトリ名を入力してください' }),
});

export type ShowRepositorySchema = z.infer<typeof zShowRepositorySchema>;
