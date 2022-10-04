import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { ToastProvider } from 'react-native-toast-notifications'

import { useUser } from './hooks/auth'
import { NativeStackRoutes } from './routes/native-stack-routes'
import { nativeBaseTheme } from './themes'

const Main = () => {
  const user = useUser()
  return (
    <NativeBaseProvider theme={nativeBaseTheme}>
      <ToastProvider>
        <NativeStackRoutes isLogged={!!user} />
      </ToastProvider>
    </NativeBaseProvider>
  )
}

export default Main
