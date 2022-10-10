import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

import AddFriendScreen from '../screens/add-friend-screen'
import HomeScreen from '../screens/home-screen'
import ProfileScreen from '../screens/profile-screen'
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
            <AntDesignIcon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AddFriend"
        component={AddFriendScreen}
        options={{
          title: 'Add Friend',
          tabBarIcon: ({ size, color }) => (
            <AntDesignIcon name="adduser" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesignIcon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
