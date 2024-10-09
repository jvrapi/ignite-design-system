import * as RadixToast from '@radix-ui/react-toast'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'

export type ToastProps = ComponentProps<typeof ToastContainer> & {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <RadixToast.Provider>
      <ToastContainer {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        <ToastClose>
          <X size={20} weight="light" />
        </ToastClose>
      </ToastContainer>

      <ToastViewport />
    </RadixToast.Provider>
  )
}

Toast.displayName = 'Toast'
