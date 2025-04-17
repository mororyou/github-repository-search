import { describe, expect, it } from 'vitest';
import { handleError } from '../index';

describe('handleError', () => {
  it('Errorインスタンスの場合、エラーメッセージを返す', () => {
    const error = new Error('テストエラー');
    const result = handleError(error);
    expect(result).toEqual({
      isSuccess: false,
      error: 'テストエラー',
    });
  });

  it('Errorインスタンス以外の場合、Unknown errorを返す', () => {
    const error = '文字列エラー';
    const result = handleError(error);
    expect(result).toEqual({
      isSuccess: false,
      error: 'Unknown error',
    });
  });

  it('nullの場合、Unknown errorを返す', () => {
    const result = handleError(null);
    expect(result).toEqual({
      isSuccess: false,
      error: 'Unknown error',
    });
  });

  it('undefinedの場合、Unknown errorを返す', () => {
    const result = handleError(undefined);
    expect(result).toEqual({
      isSuccess: false,
      error: 'Unknown error',
    });
  });
});
