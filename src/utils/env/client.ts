import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const clientEnv = createEnv({
  client: {
    NEXT_PUBLIC_URL: z.string().url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  },
});

export default clientEnv;
