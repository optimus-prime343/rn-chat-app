import auth from '@react-native-firebase/auth'
import { Avatar, Box, Button, Text, VStack } from 'native-base'
import React from 'react'

import { useUser } from '../hooks/auth'

const ProfileScreen = () => {
  const user = useUser()

  const handleLogout = () => auth().signOut()

  return (
    <Box p="2">
      <VStack space="md" alignItems="center">
        <Avatar
          width={120}
          height={120}
          source={
            user?.photoURL
              ? { uri: user.photoURL }
              : require('../assets/images/default_profile.png')
          }>
          <Avatar.Badge bg="green.500" />
        </Avatar>
        <Text>Email Address : {user?.email}</Text>
        <Button width="full" bg="red.600" onPress={handleLogout}>
          Logout
        </Button>
      </VStack>
    </Box>
  )
}

export default ProfileScreen
