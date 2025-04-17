import { z } from 'zod';

export const zResultItemOwnerSchema = z.object(
  {
    avatar_url: z
      .string({ message: 'avatar_urlは文字列で入力してください' })
      .url({ message: 'avatar_urlはURLで入力してください' }),
    login: z.string({ message: 'loginは文字列で入力してください' }),
  },
  {
    message: 'avatar_urlとloginは必須です',
  },
);

export type ResultItemOwnerSchema = z.infer<typeof zResultItemOwnerSchema>;
