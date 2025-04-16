'use server';

import { Octokit } from '@octokit/rest';

type GetRepositoriesParams = {
  repositoryName: string;
  page: number;
};

const octokit = new Octokit();

export const getRepositories = async ({
  repositoryName,
  page = 1,
}: GetRepositoriesParams) => {
  const { data } = await octokit.rest.search.repos({
    q: repositoryName,
    page,
    sort: 'stars',
    order: 'desc',
  });

  return data;
};
