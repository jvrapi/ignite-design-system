import type { Meta, StoryObj } from '@storybook/react';

import { TextInput, TextInputProps } from '@jvrapi-ignite-ui/react';

const meta = {
  title: 'Form/Text Input',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  args: { },
} satisfies Meta<TextInputProps>;

export default meta;

type Story = StoryObj<TextInputProps>;


export const Primary: Story = {
  args: {
    placeholder: 'Type your name'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
  }
};
export const WithPrefix: Story = {
  args: {
    prefix: 'call.com/',
  }
};


