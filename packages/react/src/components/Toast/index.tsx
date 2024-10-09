import * as RadixToast from '@radix-ui/react-toast'
import { ComponentProps } from '../../types/ComponentProps'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'

export type ToastProps = ComponentProps<typeof RadixToast.Root> & {
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
