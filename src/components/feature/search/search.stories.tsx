import type { Meta, StoryObj } from '@storybook/react';
import SearchPageContainer from '.';

const meta: Meta<typeof SearchPageContainer> = {
  title: 'Components/Feature/Search',
  component: SearchPageContainer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
