import { z } from 'zod';
import { zResultItemOwnerSchema } from './_utils/owner';

export const zSearchRepositorySchema = z.object(
  {
    repositoryName: z
      .string()
      .min(1, { message: 'レポジトリ名を入力してください' })
      .max(100, { message: 'レポジトリ名は100文字以内で入力してください' })
      .regex(/^[a-zA-Z0-9]+$/, { message: '半角英数字で入力してください' }),
  },
  {
    message: 'レポジトリ名を入力してください',
  },
);

export type SearchRepositorySchema = z.infer<typeof zSearchRepositorySchema>;

export const zSearchRepositoryResultItemSchema = z.object(
  {
    id: z.number({ message: 'idは数値で入力してください' }),
    name: z.string({ message: 'nameは文字列で入力してください' }),
    full_name: z.string({ message: 'full_nameは文字列で入力してください' }),
    owner: zResultItemOwnerSchema.optional(),
    html_url: z.string({ message: 'html_urlはURLで入力してください' }).url(),
    description: z
      .string({ message: 'descriptionは文字列で入力してください' })
      .nullable(),
    stargazers_count: z.number({
      message: 'stargazers_countは数値で入力してください',
    }),
    forks_count: z.number({ message: 'forks_countは数値で入力してください' }),
    topics: z
      .array(z.string({ message: 'topicsは配列で入力してください' }))
      .optional(),
    language: z
      .string({ message: 'languageは文字列で入力してください' })
      .nullable(),
  },
  {
    message: 'Null, Undefinedは許可されておりません',
  },
);

export type SearchRepositoryResultItemSchema = z.infer<
  typeof zSearchRepositoryResultItemSchema
>;

export const zSearchRepositoryResultsSchema = z.object(
  {
    total_count: z.number({ message: 'total_countは数値で入力してください' }),
    items: z.array(zSearchRepositoryResultItemSchema, {
      message: 'itemsは配列で入力してください',
    }),
    incomplete_results: z.boolean({
      message: 'incomplete_resultsは真偽値で入力してください',
    }),
  },
  {
    message: 'Null, Undefinedは許可されておりません',
  },
);

export type SearchRepositoryResultsSchema = z.infer<
  typeof zSearchRepositoryResultsSchema
>;
