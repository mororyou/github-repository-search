import type { Meta, StoryObj } from '@storybook/react';
import { Eye, GitBranch, Star } from 'lucide-react';
import ResultCard from '.';

const meta: Meta<typeof ResultCard> = {
  title: 'Components/Feature/Show/ResultCard',
  component: ResultCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    value: {
      control: 'number',
    },
    icon: {
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'スター数',
    value: 100,
    icon: <Star />,
  },
};

export const StargazersCount: Story = {
  args: {
    title: 'スター数',
    value: 100,
    icon: <Star />,
  },
};

export const WatchersCount: Story = {
  args: {
    title: 'ウォッチャー数',
    value: 100,
    icon: <Eye />,
  },
};

export const ForksCount: Story = {
  args: {
    title: 'フォーク数',
    value: 100,
    icon: <GitBranch />,
  },
};
