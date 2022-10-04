import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import LoginScreen from '../screens/login-screen'
import SignupScreen from '../screens/signup-screen'
import { reactNavigationTheme } from '../themes'
import { RootStackParamList } from '../types'
import { BottomTabRoutes } from './bottom-tab-routes'

const Stack = createNativeStackNavigator<RootStackParamList>()

interface NativeStackRoutesProps {
  isLogged: boolean
}
export const NativeStackRoutes = ({ isLogged }: NativeStackRoutesProps) => {
  return (
    <NavigationContainer theme={reactNavigationTheme}>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        {isLogged ? (
          <>
            <Stack.Screen
              name="Root"
              component={BottomTabRoutes}
              options={{ title: 'RN Chat App', headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
