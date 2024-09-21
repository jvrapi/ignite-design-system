import type { Meta, StoryObj } from '@storybook/react';

import { Box, BoxProps } from '@jvrapi-ignite-ui/react';

const meta = {
  title: 'Surfaces/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  args: { 
    children: (
      <>
        <span>Tesnto o elemento box</span>
      </>
    )
  },
} satisfies Meta<BoxProps>;

export default meta;
type Story = StoryObj<BoxProps>;


export const Primary: Story = {};

