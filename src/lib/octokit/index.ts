import { Octokit } from '@octokit/rest';

export const { rest: octokit } = new Octokit({
  // auth: serverEnv.GITHUB_TOKEN,
});
