import type { Meta, StoryObj } from '@storybook/react';

import { Heading, HeadingProps } from '@jvrapi-ignite-ui/react';

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  args: { 
    size: 'md',
    children: 'Custom title'
  },
  argTypes: {
    size: {
      description: 'Size of the button',
      options: ['sm','md','lg','2xl','4xl','5xl','6xl'],
      control: { type: 'inline-radio' }
    },
  }
} satisfies Meta<HeadingProps>;

export default meta;

type Story = StoryObj<HeadingProps>;


export const Primary: Story = {};

export const CustomTag: Story = {
  args: {
    children: 'h1 Heading',
    as: 'h1'
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão, o componente Heading é renderizado como um `h2`. No entanto, você pode alterar o elemento HTML que ele renderiza passando a propriedade `as`.'
      }
    }
  }
};

