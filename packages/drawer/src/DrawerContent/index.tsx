import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { Heading } from '@siakit/heading'
import { Flex } from '@siakit/layout'

import { CloseButton, Content, Overlay } from './styles'

interface DrawerContentProps {
  children: ReactNode
  title: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

export function DrawerContent({
  children,
  title,
  size = 'sm',
  ...props
}: DrawerContentProps) {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content size={size} {...props}>
        {!!title && (
          <Flex padding="16px 32px 16px 16px">
            <Heading size="xs" weight="medium">
              {title}
            </Heading>
          </Flex>
        )}

        <Flex flex direction="column">
          {children}
        </Flex>

        <Dialog.Close asChild>
          <CloseButton type="button" variant="ghost" colorScheme="gray">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </CloseButton>
        </Dialog.Close>
      </Content>
    </Dialog.Portal>
  )
}
