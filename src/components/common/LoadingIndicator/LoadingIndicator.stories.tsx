import type { Meta, StoryObj } from '@storybook/react';
import LoadingIndicator from '.';

const meta: Meta<typeof LoadingIndicator> = {
  title: 'Components/Common/LoadingIndicator',
  component: LoadingIndicator,
  tags: ['autodocs'],
  argTypes: {
    pending: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pending: true,
  },
};
