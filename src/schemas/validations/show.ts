import { z } from 'zod';
import { zResultItemOwnerSchema } from './_utils/owner';

export const zShowRepositorySchema = z.object(
  {
    owner: z
      .string()
      .min(1, { message: 'リポジトリの所有者を入力してください' }),
    repositoryName: z
      .string()
      .min(1, { message: 'リポジトリ名を入力してください' }),
  },
  {
    message: 'Null, Undefinedは許可されておりません',
  },
);

export type ShowRepositorySchema = z.infer<typeof zShowRepositorySchema>;

export const zShowRepositoryResultSchema = z.object(
  {
    id: z.number({ message: 'idは数値で入力してください' }),
    name: z.string({ message: 'nameは文字列で入力してください' }),
    owner: zResultItemOwnerSchema,
    stargazers_count: z.number({
      message: 'stargazers_countは数値で入力してください',
    }),
    watchers_count: z.number({
      message: 'watchers_countは数値で入力してください',
    }),
    forks_count: z.number({ message: 'forks_countは数値で入力してください' }),
    open_issues_count: z.number({
      message: 'open_issues_countは数値で入力してください',
    }),
    language: z
      .string({ message: 'languageは文字列で入力してください' })
      .nullable(),
  },
  {
    message: 'Null, Undefinedは許可されておりません',
  },
);

export type ShowRepositoryResultSchema = z.infer<
  typeof zShowRepositoryResultSchema
>;
