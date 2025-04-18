import { repo } from '@/lib/mock/data';
import type { Meta, StoryObj } from '@storybook/react';
import ShowPageContainer from '.';

const meta: Meta<typeof ShowPageContainer> = {
  title: 'Components/Feature/Show',
  component: ShowPageContainer,
  tags: ['autodocs'],
  argTypes: {
    repository: {
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    repository: repo.success,
  },
};
