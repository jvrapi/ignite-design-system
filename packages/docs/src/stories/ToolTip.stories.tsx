import type { Meta, StoryObj } from '@storybook/react';

import { Button, ToolTip, ToolTipProps } from '@jvrapi-ignite-ui/react';

const meta = {
  title: 'Surfaces/ToolTip',
  component: ToolTip,
  parameters: {
    layout: 'centered',
  },
  args: {
    content: 'This is a tooltip',
    children: <Button>Hover me</Button>,
  },
  argTypes: {
    children: {
      control: {
        disable: true
      }
    },
    content: {
      description: 'Tooltip content',
      control: {
        type: 'text'
      }
    },
  }


} satisfies Meta<ToolTipProps>;

export default meta;

type Story = StoryObj<ToolTipProps>;


export const Primary: Story = {};


