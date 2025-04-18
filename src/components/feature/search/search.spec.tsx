import { server } from '@/lib/mock/server';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterAll, beforeAll, describe, it } from 'vitest';
import SearchPageContainer from '.';
beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

describe('SearchPageContainer', () => {
  it('検索ページが正しく表示される', ({ expect }) => {
    render(<SearchPageContainer />);
    expect(screen.getByTestId('search-page-container')).toBeInTheDocument();
  });

  it('バリデーションエラーが正しく表示される', async ({ expect }) => {
    render(<SearchPageContainer />);
    const input = screen.getByPlaceholderText('リポジトリ名を入力してください');
    const user = userEvent.setup();
    await user.type(input, 'v');
    await user.keyboard('{Backspace}');
    expect(screen.getByTestId('form-message')).toHaveTextContent(
      'リポジトリ名を入力してください',
    );
    await user.keyboard('あ');
    expect(screen.getByTestId('form-message')).toHaveTextContent(
      '半角英数字で入力してください',
    );
    await user.keyboard('a'.repeat(101));
    expect(screen.getByTestId('form-message')).toHaveTextContent(
      'リポジトリ名は100文字以内で入力してください',
    );
  });

  it('リポジトリ名を入力して検索ボタンを押すと、リポジトリが表示される', async ({
    expect,
  }) => {
    render(<SearchPageContainer />);
    const input = screen.getByPlaceholderText('リポジトリ名を入力してください');
    const user = userEvent.setup();
    await user.type(input, 'vue');
    await user.keyboard('{Enter}');

    await waitFor(async () => {
      expect(screen.getAllByTestId('repository-card')).toHaveLength(10);
    });
  });
});
