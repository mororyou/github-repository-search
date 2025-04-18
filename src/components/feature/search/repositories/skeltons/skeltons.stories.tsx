import type { Meta, StoryObj } from '@storybook/react';
import Skeletons from '.';

const meta: Meta<typeof Skeletons> = {
  title: 'Components/Feature/Search/Repositories/Skeletons',
  component: Skeletons,
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 3,
  },
};
