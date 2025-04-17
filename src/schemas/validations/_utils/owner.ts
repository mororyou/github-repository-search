import { z } from 'zod';

export const zResultItemOwnerSchema = z.object({
  avatar_url: z.string().url(),
  login: z.string(),
});

export type ResultItemOwnerSchema = z.infer<typeof zResultItemOwnerSchema>;
