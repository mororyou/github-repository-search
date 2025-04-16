import { describe, it } from 'vitest';
import { zShowRepositorySchema } from '../show';

describe('zShowRepositorySchema', () => {
  it('半角英数字で入力した場合、正常に通る', ({ expect }) => {
    const result = zShowRepositorySchema.parse({
      owner: 'test1234',
      repositoryName: 'test1234',
    });

    expect(result).toEqual({
      owner: 'test1234',
      repositoryName: 'test1234',
    });
  });

  it('ownerが空文字の場合、エラーを返す', ({ expect }) => {
    const result = zShowRepositorySchema.safeParse({
      owner: '',
      repositoryName: 'test1234',
    });

    expect(result.error?.errors[0].message).toBe(
      'リポジトリの所有者を入力してください',
    );
  });

  it('repositoryNameが空文字の場合、エラーを返す', ({ expect }) => {
    const result = zShowRepositorySchema.safeParse({
      owner: 'test1234',
      repositoryName: '',
    });

    expect(result.error?.errors[0].message).toBe(
      'リポジトリ名を入力してください',
    );
  });
});
