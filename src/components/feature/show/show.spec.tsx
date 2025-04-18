import { repo } from '@/lib/mock/data';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import ShowPageContainer from '.';

describe('ShowPageContainer', () => {
  it('リポジトリ名が正しく表示される', ({ expect }) => {
    render(<ShowPageContainer repository={repo.success} />);
    expect(screen.getByText(repo.success.name)).toBeInTheDocument();
  });
});
