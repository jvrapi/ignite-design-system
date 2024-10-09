import type { Meta, StoryObj } from '@storybook/react';

import { Button, Toast, ToastProps } from '@jvrapi-ignite-ui/react';
import { useEffect, useRef, useState } from 'react';

const DemonToast = (props: ToastProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const timeRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timeRef.current)
  },[])

  return (
    <>
      <Button onClick={() => {
        setIsOpen(false)
        window.clearTimeout(timeRef.current)
        timeRef.current = window.setTimeout(() => {
          setIsOpen(true)
        })
      }}>Agendar</Button>
      <Toast open={isOpen} onOpenChange={() => setIsOpen(false)} {...props} />
    </>
  )
}

const meta = {
  title: 'Surfaces/Toast',
  component: DemonToast,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },

  argTypes: {
    title: {
      description: 'Toast title',
      control: {
        type: 'text'
      }
    },
    description: {
      description: 'Toast description',
      control: {
        type: 'text'
      }
    },
  }
  
} satisfies Meta<ToastProps>;

export default meta;

type Story = StoryObj<ToastProps>;

export const Primary: Story = {};


