import type { Meta, StoryObj } from '@storybook/react';
import { FormError } from './';

const meta: Meta<typeof FormError> = {
  title: 'Components/Common/FormError',
  component: FormError,
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'エラーメッセージ',
  },
};

export const NoMessage: Story = {
  args: {},
};
