import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps } from '@jvrapi-ignite-ui/react';

const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  args: { 
    size: 'md',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil delectus assumenda ullam at? Earum neque nihil nemo porro non modi, error quaerat nulla dolores animi eaque rem recusandae ipsum amet!'
  },
  argTypes: {
    size: {
      description: 'Size of the text',
      options: ['xxs','xs','sm','md','lg','xl','2xl','4xl','5xl','6xl','7xl','8xl','9xl'],
      control: { type: 'inline-radio' }
    },
  }
} satisfies Meta<TextProps>;

export default meta;

type Story = StoryObj<TextProps>;


export const Primary: Story = {};

export const CustomTag: Story = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
};

