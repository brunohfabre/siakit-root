import * as RadixTabs from '@radix-ui/react-tabs'
import { styled } from '@siakit/core'

export const Tabs = styled(RadixTabs.Root, {
  flex: 1,

  display: 'flex',
  flexDirection: 'column',

  overflow: 'auto',
})
