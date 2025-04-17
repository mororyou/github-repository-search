'use server';

import { perPage } from '@/queries/repository';
import { ActionResult } from '@/schemas/types/result';
import {
  SearchRepositoryResultsSchema,
  zSearchRepositoryResultsSchema,
  zSearchRepositorySchema,
} from '@/schemas/validations/search';
import {
  ShowRepositoryResultSchema,
  zShowRepositoryResultSchema,
  zShowRepositorySchema,
} from '@/schemas/validations/show';
import { Octokit } from '@octokit/rest';

type GetRepositoriesParams = {
  repositoryName: string;
  page: number;
};

const octokit = new Octokit();

export const getRepositories = async ({
  repositoryName,
  page = 1,
}: GetRepositoriesParams): Promise<
  ActionResult<SearchRepositoryResultsSchema>
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
      per_page: perPage,
    });

    const parsedData = zSearchRepositoryResultsSchema.parse(data);

    return {
      isSuccess: true,
      data: parsedData,
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
}: GetRepositoryParams): Promise<ActionResult<ShowRepositoryResultSchema>> => {
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

    const parsedData = zShowRepositoryResultSchema.parse(data);

    return {
      isSuccess: true,
      data: parsedData,
    };
  } catch (error: unknown) {
    return {
      isSuccess: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};
