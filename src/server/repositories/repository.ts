'use server';

import { ActionResult } from '@/schemas/types/result';
import { zSearchRepositorySchema } from '@/schemas/validations/search';
import { zShowRepositorySchema } from '@/schemas/validations/show';
import { Octokit, RestEndpointMethodTypes } from '@octokit/rest';

type GetRepositoriesParams = {
  repositoryName: string;
  page: number;
};

const octokit = new Octokit();

export const getRepositories = async ({
  repositoryName,
  page = 1,
}: GetRepositoriesParams): Promise<
  ActionResult<RestEndpointMethodTypes['search']['repos']['response']['data']>
> => {
  try {
    const isValid = zSearchRepositorySchema.safeParse({
      repositoryName,
    });

    if (!isValid.success) {
      throw new Error('Invalid repository name');
    }
    const { data } = await octokit.rest.search.repos({
      q: repositoryName,
      page,
      sort: 'stars',
      order: 'desc',
    });

    return {
      isSuccess: true,
      data,
    };
  } catch (error) {
    return {
      isSuccess: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

type GetRepositoryParams = {
  owner: string;
  repositoryName: string;
};

export const getRepository = async ({
  owner,
  repositoryName,
}: GetRepositoryParams): Promise<
  ActionResult<RestEndpointMethodTypes['repos']['get']['response']['data']>
> => {
  try {
    const isValid = zShowRepositorySchema.safeParse({
      owner,
      repositoryName,
    });

    if (!isValid.success) {
      throw new Error('Invalid repository name');
    }

    const { data } = await octokit.rest.repos.get({
      owner,
      repo: repositoryName,
    });

    return {
      isSuccess: true,
      data,
    };
  } catch (error: unknown) {
    return {
      isSuccess: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};
