import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import NotFound from '../not-found';
describe('Not Found Page', () => {
  it('Not Found ページが正常にレンダリングされる', ({ expect }) => {
    render(<NotFound />);

    const notFoundPage = screen.getByTestId('not-found-page');
    expect(notFoundPage).toBeInTheDocument();
  });
});
