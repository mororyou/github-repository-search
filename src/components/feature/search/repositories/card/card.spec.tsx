import { repos } from '@/lib/mock/data';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import RepositoryCard from '.';

describe('RepositoryCard', () => {
  it('リポジトリ名が正しく表示される', ({ expect }) => {
    render(<RepositoryCard repository={repos.success.items[0]} />);
    expect(screen.getByText(repos.success.items[0].name)).toBeInTheDocument();
  });
});
