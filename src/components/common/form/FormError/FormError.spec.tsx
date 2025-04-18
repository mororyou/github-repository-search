import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { FormError } from '../FormError';

describe('FormError', () => {
  it('エラーメッセージがある場合は表示される', ({ expect }) => {
    render(<FormError message="This is an error message" />);
    expect(screen.getByText('This is an error message')).toBeInTheDocument();
  });

  it('エラーメッセージがない場合は表示されない', ({ expect }) => {
    render(<FormError />);
    expect(screen.queryByRole('alert')).toBeNull();
  });
});
