import { BrowserRouter } from 'react-router-dom'

import { Provider } from '@siakit/core'
import { DialogProvider } from '@siakit/dialog'
import { LoadingProvider } from '@siakit/loading'
import { ToastProvider } from '@siakit/toast'

import { DefaultLayout } from './pages/_layouts/Default'
import { AppRoutes } from './Routes/AppRoutes'

export function App() {
  return (
    <Provider>
      <ToastProvider>
        <LoadingProvider>
          <DialogProvider>
            <DefaultLayout>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </DefaultLayout>
          </DialogProvider>
        </LoadingProvider>
      </ToastProvider>
    </Provider>
  )
}
