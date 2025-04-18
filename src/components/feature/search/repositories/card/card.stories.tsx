import { repo } from '@/lib/mock/data';
import type { Meta, StoryObj } from '@storybook/react';
import RepositoryCard from '.';

const meta: Meta<typeof RepositoryCard> = {
  title: 'Components/Feature/Search/Repositories/Card',
  component: RepositoryCard,
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
