import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import InputFormControl from './';

const meta: Meta<typeof InputFormControl> = {
  title: 'Components/Common/InputFormControl',
  component: InputFormControl,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'number', 'tel', 'url'],
    },
    placeholder: {
      control: 'text',
    },
  },
  decorators: [
    (Story) => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter your name',
  },
};
