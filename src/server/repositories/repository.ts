'use server';

import { octokit } from '@/lib/octokit';
import { perPage } from '@/queries/repository';
import { ActionResult } from '@/schemas/types/result';
import {
  SearchRepositoryResultsSchema,
  ShowRepositoryResultSchema,
  zSearchRepositoryResultsSchema,
  zSearchRepositorySchema,
  zShowRepositoryResultSchema,
  zShowRepositorySchema,
} from '@/schemas/validations';
import { handleError } from '@/utils/error';

type GetRepositoriesParams = {
  repositoryName: string;
  page?: number;
};

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
      throw new Error(isValid.error.errors[0].message);
    }
    const { data } = await octokit.search.repos({
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
    return handleError(error);
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
      throw new Error(isValid.error.errors[0].message);
    }

    const { data } = await octokit.repos.get({
      owner,
      repo: repositoryName,
    });

    const parsedData = zShowRepositoryResultSchema.parse(data);

    return {
      isSuccess: true,
      data: parsedData,
    };
  } catch (error) {
    return handleError(error);
  }
};
