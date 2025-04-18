import { describe, expect, it } from 'vitest';
import { repositoryKeys } from '../keys';

describe('repositoryKeys', () => {
  describe('search', () => {
    it('正しいsearchキー配列を返す', () => {
      const keyword = 'test-keyword';
      const result = repositoryKeys.search(keyword);
      expect(result).toEqual(['search', keyword]);
    });

    it('空のキーワードを処理できる', () => {
      const result = repositoryKeys.search('');
      expect(result).toEqual(['search', '']);
    });
  });

  describe('show', () => {
    it('正しいshowキー配列を返す', () => {
      const id = '123';
      const result = repositoryKeys.show(id);
      expect(result).toEqual(['show', id]);
    });

    it('空のidを処理できる', () => {
      const result = repositoryKeys.show('');
      expect(result).toEqual(['show', '']);
    });
  });
});
