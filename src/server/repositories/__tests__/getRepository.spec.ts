import { repo } from '@/lib/mock/data';
import { server } from '@/lib/mock/server';
import { afterAll, beforeAll, describe, it } from 'vitest';
import { getRepository } from '../repository';

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

describe('getRepository test', () => {
  it('正常にリポジトリを取得できる', async ({ expect }) => {
    const result = await getRepository({
      owner: 'facebook',
      repositoryName: 'react',
    });

    expect(result).toStrictEqual({
      isSuccess: true,
      data: repo.success,
    });
  });

  it('validationエラーが正常に返される', async ({ expect }) => {
    const result = await getRepository({
      owner: 'facebook',
      repositoryName: '',
    });

    expect(result).toStrictEqual({
      isSuccess: false,
      error: 'リポジトリ名を入力してください',
    });
  });
});
