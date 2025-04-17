import { describe, it } from 'vitest';
import { zResultItemOwnerSchema } from '../owner';

describe('zResultItemOwnerSchema validation tests', () => {
  it('正常な値の場合', ({ expect }) => {
    expect(() =>
      zResultItemOwnerSchema.parse({
        avatar_url: 'https://example.com/avatar.png',
        login: 'example',
      }),
    ).not.toThrowError();
  });

  it('avatar_urlがURLでない場合、エラーを返す', ({ expect }) => {
    expect(() =>
      zResultItemOwnerSchema.parse({
        avatar_url: 'invalid-url',
        login: 'example',
      }),
    ).toThrowError('avatar_urlはURLで入力してください');
  });

  it('avatar_urlが文字列でない場合、エラーを返す', ({ expect }) => {
    expect(() =>
      zResultItemOwnerSchema.parse({
        avatar_url: 123,
        login: 'example',
      }),
    ).toThrowError('avatar_urlは文字列で入力してください');
  });

  it('loginが文字列でない場合、エラーを返す', ({ expect }) => {
    expect(() =>
      zResultItemOwnerSchema.parse({
        avatar_url: 'https://example.com/avatar.png',
        login: 123,
      }),
    ).toThrowError('loginは文字列で入力してください');
  });

  it('Nullの場合、エラーを返す', ({ expect }) => {
    expect(() => zResultItemOwnerSchema.parse(null)).toThrowError(
      'avatar_urlとloginは必須です',
    );
  });

  it('undefinedの場合、エラーを返す', ({ expect }) => {
    expect(() => zResultItemOwnerSchema.parse(undefined)).toThrowError(
      'avatar_urlとloginは必須です',
    );
  });
});
