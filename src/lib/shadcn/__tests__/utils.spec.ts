import { describe, expect, it } from 'vitest';
import { cn } from '../utils';

describe('cn function', () => {
  it('正常にクラス名をマージできる', () => {
    const result = cn('class1', 'class2');
    expect(result).toBe('class1 class2');
  });

  it('条件付きクラスを正常に処理できる', () => {
    const result = cn('base', { conditional: true, 'not-included': false });
    expect(result).toBe('base conditional');
  });

  it('複数の条件付きクラスを正常に処理できる', () => {
    const result = cn(
      'base',
      { class1: true, class2: false },
      { class3: true, class4: false },
    );
    expect(result).toBe('base class1 class3');
  });

  it('空の入力を正常に処理できる', () => {
    const result = cn();
    expect(result).toBe('');
  });
});
