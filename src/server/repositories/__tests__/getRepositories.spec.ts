import { repos } from '@/lib/mock/data';
import { server } from '@/lib/mock/server';
import { afterAll, beforeAll, describe, it } from 'vitest';
import { getRepositories } from '../repository';

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

describe('getRepositories', () => {
  it('正常にリポジトリを取得できる', async ({ expect }) => {
    const result = await getRepositories({
      repositoryName: 'react',
    });

    expect(result).toStrictEqual({
      isSuccess: true,
      data: repos.success,
    });
  });

  it('validationエラーが正常に返される', async ({ expect }) => {
    const result = await getRepositories({
      repositoryName: '',
    });

    expect(result).toStrictEqual({
      isSuccess: false,
      error: 'リポジトリ名を入力してください',
    });
  });
});
