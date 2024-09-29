import type { Meta, StoryObj } from '@storybook/react';

import { Box, BoxProps, Text } from '@jvrapi-ignite-ui/react';

const meta = {
  title: 'Surfaces/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: <Text>Testando o elemento box</Text>
  },
  argTypes: {
    children: {
      control: {
        disable: true
      }
    }
  }
} satisfies Meta<BoxProps>;

export default meta;
type Story = StoryObj<BoxProps>;


export const Primary: Story = {};

