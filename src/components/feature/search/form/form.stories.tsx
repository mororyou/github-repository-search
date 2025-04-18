import type { Meta, StoryObj } from '@storybook/react';
import SearchRepositoryForm from '.';

const meta: Meta<typeof SearchRepositoryForm> = {
  title: 'Components/Feature/Search/Form',
  component: SearchRepositoryForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
