import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from '@jvrapi-ignite-ui/react';
import { ArrowRight } from 'phosphor-react';

const meta = {
  title: 'Form/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],


  args: { children: 'Send', },
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {};

export const Secondary: Story = {

  args: {
    variant: 'secondary',
    children: 'Create new'
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight='bold' />
      </>
    )
  },
};

export const Disabled: Story = {
  args: {
    disabled: 'true',
  },
};



