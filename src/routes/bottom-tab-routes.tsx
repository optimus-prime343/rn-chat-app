import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

import AddFriendScreen from '../screens/add-friend-screen'
import FriendScreen from '../screens/friends-screen'
import HomeScreen from '../screens/home-screen'
import SettingScreen from '../screens/setting-screen'
import { RootStackParamList } from '../types'

const Tab = createBottomTabNavigator<RootStackParamList>()

export const BottomTabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AddFriend"
        component={AddFriendScreen}
        options={{
          title: 'Add Friend',
          tabBarIcon: ({ size, color }) => (
            <Icon name="adduser" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="setting" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
