import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import LoadingIndicator from '.';

describe('LoadingIndicator', () => {
  it('通常時は、ローディングインジケーターが表示されない', ({ expect }) => {
    render(<LoadingIndicator />);
    expect(screen.queryByTestId('loading-indicator')).toBeNull();
  });
});
