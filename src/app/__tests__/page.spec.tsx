import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Home from '../page';

describe('Home Page', () => {
  it('ホームページが正常にレンダリングされる', ({ expect }) => {
    render(<Home />);

    // SearchPageContainerがレンダリングされていることを確認
    const searchContainer = screen.getByTestId('search-page-container');
    expect(searchContainer).toBeInTheDocument();
  });
});
