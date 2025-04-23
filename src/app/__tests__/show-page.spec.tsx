import { repo } from '@/lib/mock/data';
import { getRepository } from '@/server/repositories/repository';
import { redirect } from 'next/navigation';
import { describe, expect, it, vi } from 'vitest';
import ShowPage from '../[owner]/[repositoryName]/page';
vi.mock('@/server/repositories/repository', () => ({
  getRepository: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  redirect: vi.fn(),
}));

describe('Show Page', () => {
  it('リポジトリ情報が正しく取得できる場合、ShowPageContainerをレンダリングする', async () => {
    const mockRepository = {
      isSuccess: true,
      data: repo.success,
    };

    vi.mocked(getRepository).mockResolvedValue(mockRepository);

    const params = Promise.resolve({
      owner: 'facebook',
      repositoryName: 'react',
    });

    const result = await ShowPage({ params });

    expect(getRepository).toHaveBeenCalledWith({
      owner: 'facebook',
      repositoryName: 'react',
    });
    expect(result.props.repository).toEqual(mockRepository.data);
  });

  it('リポジトリ情報が取得できない場合、404ページにリダイレクトする', async () => {
    const mockRepository = {
      isSuccess: false,
      data: undefined,
    };

    vi.mocked(getRepository).mockResolvedValue(mockRepository);

    const params = Promise.resolve({
      owner: 'test-owner',
      repositoryName: 'test-repo',
    });

    await ShowPage({ params });

    expect(redirect).toHaveBeenCalledWith('/404');
  });

  it('オーナー名が不正な場合、404ページにリダイレクトする', async () => {
    const params = Promise.resolve({
      owner: '',
      repositoryName: 'test-repo',
    });

    await ShowPage({ params });

    expect(redirect).toHaveBeenCalledWith('/404');
  });

  it('リポジトリ名が不正な場合、404ページにリダイレクトする', async () => {
    const params = Promise.resolve({
      owner: 'test-owner',
      repositoryName: '',
    });

    await ShowPage({ params });

    expect(redirect).toHaveBeenCalledWith('/404');
  });
});
