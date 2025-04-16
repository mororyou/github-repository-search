import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const serverEnv = createEnv({
  server: {
    GITHUB_TOKEN: z.string(),
  },
  runtimeEnv: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
});

export default serverEnv;
