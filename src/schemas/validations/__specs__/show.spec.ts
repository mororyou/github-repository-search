import { describe, it } from 'vitest';
import { zShowRepositoryResultSchema, zShowRepositorySchema } from '../show';

describe('show validation tests', () => {
  describe('zShowRepositorySchema', () => {
    it('半角英数字で入力した場合、正常に通る', ({ expect }) => {
      expect(() =>
        zShowRepositorySchema.parse({
          owner: 'test1234',
          repositoryName: 'test1234',
        }),
      ).not.toThrowError();
    });

    it('ownerが空文字の場合、エラーを返す', ({ expect }) => {
      expect(() =>
        zShowRepositorySchema.parse({
          owner: '',
          repositoryName: 'test1234',
        }),
      ).toThrowError('リポジトリの所有者を入力してください');
    });

    it('repositoryNameが空文字の場合、エラーを返す', ({ expect }) => {
      expect(() =>
        zShowRepositorySchema.parse({
          owner: 'test1234',
          repositoryName: '',
        }),
      ).toThrowError('リポジトリ名を入力してください');
    });

    it('Nullの場合、エラーを返す', ({ expect }) => {
      expect(() => zShowRepositorySchema.parse(null)).toThrowError(
        'Null, Undefinedは許可されておりません',
      );
    });

    it('undefinedの場合、エラーを返す', ({ expect }) => {
      expect(() => zShowRepositorySchema.parse(undefined)).toThrowError(
        'Null, Undefinedは許可されておりません',
      );
    });
  });

  describe('zShowRepositoryResultSchema', () => {
    it('正常な値の場合', ({ expect }) => {
      expect(() =>
        zShowRepositoryResultSchema.parse({
          id: 1,
          name: 'test',
          owner: {
            avatar_url: 'https://example.com/avatar.png',
            login: 'test',
          },
          stargazers_count: 2,
          watchers_count: 3,
          forks_count: 4,
          open_issues_count: 5,
          language: 'test',
        }),
      ).not.toThrowError();
    });

    it('idが数値でない場合、エラーを返す', ({ expect }) => {
      expect(() =>
        zShowRepositoryResultSchema.parse({
          id: 'test',
        }),
      ).toThrowError('idは数値で入力してください');
    });

    it('nameが文字列でない場合、エラーを返す', ({ expect }) => {
      expect(() =>
        zShowRepositoryResultSchema.parse({
          name: 123,
        }),
      ).toThrowError('nameは文字列で入力してください');
    });

    it('stargazers_countが数値でない場合、エラーを返す', ({ expect }) => {
      expect(() =>
        zShowRepositoryResultSchema.parse({
          stargazers_count: 'test',
        }),
      ).toThrowError('stargazers_countは数値で入力してください');
    });

    it('watchers_countが数値でない場合、エラーを返す', ({ expect }) => {
      expect(() =>
        zShowRepositoryResultSchema.parse({
          watchers_count: 'test',
        }),
      ).toThrowError('watchers_countは数値で入力してください');
    });

    it('forks_countが数値でない場合、エラーを返す', ({ expect }) => {
      expect(() =>
        zShowRepositoryResultSchema.parse({
          forks_count: 'test',
        }),
      ).toThrowError('forks_countは数値で入力してください');
    });

    it('open_issues_countが数値でない場合、エラーを返す', ({ expect }) => {
      expect(() =>
        zShowRepositoryResultSchema.parse({
          open_issues_count: 'test',
        }),
      ).toThrowError('open_issues_countは数値で入力してください');
    });

    it('languageが文字列でない場合、エラーを返す', ({ expect }) => {
      expect(() =>
        zShowRepositoryResultSchema.parse({
          language: 123,
        }),
      ).toThrowError('languageは文字列で入力してください');
    });

    it('Nullの場合、エラーを返す', ({ expect }) => {
      expect(() => zShowRepositoryResultSchema.parse(null)).toThrowError(
        'Null, Undefinedは許可されておりません',
      );
    });

    it('undefinedの場合、エラーを返す', ({ expect }) => {
      expect(() => zShowRepositoryResultSchema.parse(undefined)).toThrowError(
        'Null, Undefinedは許可されておりません',
      );
    });
  });
});
