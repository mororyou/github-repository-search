import { describe, it } from 'vitest';
import {
  zSearchRepositoryResultItemSchema,
  zSearchRepositoryResultsSchema,
  zSearchRepositorySchema,
} from '../search';

describe('zSearchRepositorySchema validation tests', () => {
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

  it('nullの場合、エラーを返す', ({ expect }) => {
    expect(() => zSearchRepositorySchema.parse(null)).toThrowError(
      'レポジトリ名を入力してください',
    );
  });

  it('undefinedの場合、エラーを返す', ({ expect }) => {
    expect(() => zSearchRepositorySchema.parse(undefined)).toThrowError(
      'レポジトリ名を入力してください',
    );
  });
});

describe('zSearchRepositoryResultItemSchema validation tests', () => {
  it('正常な値の場合', ({ expect }) => {
    expect(() =>
      zSearchRepositoryResultItemSchema.parse({
        id: 1,
        name: 'test',
        full_name: 'test/test',
        owner: {
          avatar_url: 'https://example.com/avatar.png',
          login: 'test',
        },
        html_url: 'https://example.com/test',
        description: 'test',
        stargazers_count: 1,
        forks_count: 1,
        topics: ['test', 'test2'],
        language: 'test',
      }),
    ).not.toThrowError();
  });

  it('idが数値でない場合、エラーを返す', ({ expect }) => {
    expect(() =>
      zSearchRepositoryResultItemSchema.parse({
        id: 'test',
      }),
    ).toThrowError('idは数値で入力してください');
  });

  it('nameが文字列でない場合、エラーを返す', ({ expect }) => {
    expect(() =>
      zSearchRepositoryResultItemSchema.parse({
        name: 123,
      }),
    ).toThrowError('nameは文字列で入力してください');
  });

  it('full_nameが文字列でない場合、エラーを返す', ({ expect }) => {
    expect(() =>
      zSearchRepositoryResultItemSchema.parse({
        full_name: 123,
      }),
    ).toThrowError('full_nameは文字列で入力してください');
  });

  it('descriptionが文字列でない場合、エラーを返す', ({ expect }) => {
    expect(() =>
      zSearchRepositoryResultItemSchema.parse({
        description: 123,
      }),
    ).toThrowError('descriptionは文字列で入力してください');
  });

  it('stargazers_countが数値でない場合、エラーを返す', ({ expect }) => {
    expect(() =>
      zSearchRepositoryResultItemSchema.parse({
        stargazers_count: 'test',
      }),
    ).toThrowError('stargazers_countは数値で入力してください');
  });

  it('forks_countが数値でない場合、エラーを返す', ({ expect }) => {
    expect(() =>
      zSearchRepositoryResultItemSchema.parse({
        forks_count: 'test',
      }),
    ).toThrowError('forks_countは数値で入力してください');
  });

  it('topicsが配列でない場合、エラーを返す', ({ expect }) => {
    expect(() =>
      zSearchRepositoryResultItemSchema.parse({
        topics: 'test',
      }),
    ).toThrowError('topicsは配列で入力してください');
  });

  it('languageが文字列でない場合、エラーを返す', ({ expect }) => {
    expect(() =>
      zSearchRepositoryResultItemSchema.parse({
        language: 123,
      }),
    ).toThrowError('languageは文字列で入力してください');
  });

  it('undefinedの場合、エラーを返す', ({ expect }) => {
    expect(() =>
      zSearchRepositoryResultItemSchema.parse(undefined),
    ).toThrowError('Null, Undefinedは許可されておりません');
  });
});

describe('zSearchRepositoryResultsSchema validation tests', () => {
  it('正常な値の場合', ({ expect }) => {
    expect(() =>
      zSearchRepositoryResultsSchema.parse({
        total_count: 1,
        items: [
          {
            id: 1,
            name: 'test',
            full_name: 'test/test',
            owner: {
              avatar_url: 'https://example.com/avatar.png',
              login: 'test',
            },
            html_url: 'https://example.com/test',
            description: 'test',
            stargazers_count: 1,
            forks_count: 1,
            topics: ['test', 'test2'],
            language: 'test',
          },
        ],
        incomplete_results: false,
      }),
    ).not.toThrowError();
  });

  it('total_countが数値でない場合、エラーを返す', ({ expect }) => {
    expect(() =>
      zSearchRepositoryResultsSchema.parse({
        total_count: 'test',
        items: [],
        incomplete_results: false,
      }),
    ).toThrowError('total_countは数値で入力してください');
  });

  it('itemsが配列でない場合、エラーを返す', ({ expect }) => {
    expect(() =>
      zSearchRepositoryResultsSchema.parse({
        total_count: 1,
        items: 'test',
        incomplete_results: false,
      }),
    ).toThrowError('itemsは配列で入力してください');
  });

  it('incomplete_resultsが真偽値でない場合、エラーを返す', ({ expect }) => {
    expect(() =>
      zSearchRepositoryResultsSchema.parse({
        total_count: 1,
        items: [],
        incomplete_results: 'test',
      }),
    ).toThrowError('incomplete_resultsは真偽値で入力してください');
  });

  it('Nullの場合、エラーを返す', ({ expect }) => {
    expect(() => zSearchRepositoryResultsSchema.parse(null)).toThrowError(
      'Null, Undefinedは許可されておりません',
    );
  });

  it('undefinedの場合、エラーを返す', ({ expect }) => {
    expect(() => zSearchRepositoryResultsSchema.parse(undefined)).toThrowError(
      'Null, Undefinedは許可されておりません',
    );
  });
});
