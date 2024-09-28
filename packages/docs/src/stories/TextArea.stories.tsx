import type { Meta, StoryObj } from '@storybook/react';

import { Box, Text, TextArea, TextAreaProps } from '@jvrapi-ignite-ui/react';

const meta = {
  title: 'Form/Text Area',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  args: {},
  decorators: [
    (Story) => (
      <Box as="label" css={{display: 'flex', flexDirection: 'column', gap: '$2'}}>
        <Text size='$sm'>Observations</Text>
        <Story />
      </Box>
    ),
  ]
} satisfies Meta<TextAreaProps>;

export default meta;

type Story = StoryObj<TextAreaProps>;


export const Primary: Story = {
  args: {
    placeholder: 'Add any observations...'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
  }
};



