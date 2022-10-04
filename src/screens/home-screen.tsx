import auth from '@react-native-firebase/auth'
import { Box, Button, Text } from 'native-base'
import React from 'react'

import { useUser } from '../hooks/auth'

const HomeScreen = () => {
  const user = useUser()
  const handleLogout = () => auth().signOut()

  return (
    <Box p="4">
      <Text mb="6">{JSON.stringify(user, null, 4)}</Text>
      <Button onPress={handleLogout}>Logout</Button>
    </Box>
  )
}

export default HomeScreen
