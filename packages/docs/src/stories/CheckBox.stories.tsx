import type { Meta, StoryObj } from '@storybook/react';

import { Box, Text, CheckBox, CheckBoxProps } from '@jvrapi-ignite-ui/react';

const meta = {
  title: 'Form/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  args: {},
  decorators: [
    (Story) => (
      <Box as="label" css={{display: 'flex', flexDirection: 'row', gap: '$2'}}>
        <Story />
        <Text size='$sm'>Accept term of use</Text>
      </Box>
    ),
  ]
} satisfies Meta<CheckBoxProps>;

export default meta;

type Story = StoryObj<CheckBoxProps>;


export const Primary: Story = {};


