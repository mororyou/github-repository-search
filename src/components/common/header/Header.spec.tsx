import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Header from '.';

describe('Header', () => {
  it('リポジトリ検索のヘッダーが表示される', ({ expect }) => {
    render(<Header />);
    expect(screen.getByText('Search Repository')).toBeInTheDocument();
  });
});
