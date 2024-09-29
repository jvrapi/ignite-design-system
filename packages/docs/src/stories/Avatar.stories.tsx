import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarProps } from '@jvrapi-ignite-ui/react';

const meta = {
  title: 'Data display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  args: { 
    src: 'https://github.com/jvrapi.png',
    alt: 'João Vitor'
  },
  argTypes: {
    src: {
      description: 'Avatar image source',
      control: {
        type: 'text'
      }
    },
    alt: {
      description: 'Avatar image alt',
      control: {
        type: 'text'
      }
    }
  }
} satisfies Meta<AvatarProps>;

export default meta;

type Story = StoryObj<AvatarProps>;


export const Primary: Story = {};

export const WithFallback: Story = {
  args: {
    src: undefined
  }
};

