import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Skeletons from '.';

describe('Skeletons', () => {
  it('Skeltonが正しく3つ描画される', ({ expect }) => {
    render(<Skeletons count={3} />);
    expect(screen.getAllByTestId('skeleton')).toHaveLength(3);
  });
});
