import type { Meta, StoryObj } from '@storybook/react';

import { Box, MultiStep, MultiStepProps } from '@jvrapi-ignite-ui/react';

const meta = {
  title: 'Form/Multi Step',
  component: MultiStep,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: 4,
    currentStep: 1,
  },
  argTypes: {
    size: {
      description: 'Number of steps',
    },
    currentStep: {
      description: 'Current step',
    }
  },
  decorators: [
    (Story) => (
      <Box as="label" css={{display: 'flex', flexDirection: 'column', gap: '$2'}}>
        <Story />
      </Box>
    ),
  ]
} satisfies Meta<MultiStepProps>;

export default meta;

type Story = StoryObj<MultiStepProps>;


export const Primary: Story = {}

export const Full: Story = {
  args: {
    currentStep: 4
  }
}



