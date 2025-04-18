import { http, HttpResponse } from 'msw';
import { repo, repos } from './data';
export const mockHandler = [
  // リポジトリ検索
  http.get('https://api.github.com/search/repositories', () => {
    return HttpResponse.json(repos.success);
  }),
  // リポジトリ詳細
  http.get('https://api.github.com/repos/:owner/:repo', () => {
    return HttpResponse.json(repo.success);
  }),
];
