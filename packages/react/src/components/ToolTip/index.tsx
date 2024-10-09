import * as RadixToolTip from '@radix-ui/react-tooltip'
import { ComponentProps } from '../../types/ComponentProps'

import { TooltipArrow, ToolTipContent } from './styles'
import { ReactNode } from 'react'

export type ToolTipProps = ComponentProps<typeof RadixToolTip.Root> & {
  content: string | ReactNode
  children: ReactNode
}

export function ToolTip({ content, children, ...props }: ToolTipProps) {
  return (
    <RadixToolTip.Provider {...props}>
      <RadixToolTip.Root>
        <RadixToolTip.Trigger asChild>{children}</RadixToolTip.Trigger>

        <ToolTipContent side="top" sideOffset={5}>
          <TooltipArrow />
          {content}
        </ToolTipContent>
      </RadixToolTip.Root>
    </RadixToolTip.Provider>
  )
}

ToolTip.displayName = 'ToolTip'
