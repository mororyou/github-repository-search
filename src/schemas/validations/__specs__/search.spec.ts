import { describe, it } from 'vitest';
import { zSearchRepositorySchema } from '../search';

describe('zSearchRepositorySchema', () => {
  it('半角英数字で入力した場合、正常に通る', ({ expect }) => {
    const result = zSearchRepositorySchema.parse({
      repositoryName: 'test1234',
    });

    expect(result).toEqual({
      repositoryName: 'test1234',
    });
  });

  it('空文字の場合、エラーを返す', ({ expect }) => {
    const result = zSearchRepositorySchema.safeParse({
      repositoryName: '',
    });

    expect(result.error?.errors[0].message).toBe(
      'レポジトリ名を入力してください',
    );
  });
  it('100文字以上の場合、エラーを返す', ({ expect }) => {
    const result = zSearchRepositorySchema.safeParse({
      repositoryName: 'a'.repeat(101),
    });

    expect(result.error?.errors[0].message).toBe(
      'レポジトリ名は100文字以内で入力してください',
    );
  });

  it('半角英数字でない場合、エラーを返す', ({ expect }) => {
    const result = zSearchRepositorySchema.safeParse({
      repositoryName: 'テスト',
    });

    expect(result.error?.errors[0].message).toBe(
      '半角英数字で入力してください',
    );
  });
});
