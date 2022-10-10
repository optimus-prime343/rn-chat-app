import { Box, Button, Flex, Input } from 'native-base'
import React from 'react'

const AddFriendScreen = () => {
  return (
    <Box p="4">
      <Flex direction="row" alignItems="center">
        <Input flex={1} mr="2" placeholder="Search for a friend" />
        <Button>Search</Button>
      </Flex>
    </Box>
  )
}

export default AddFriendScreen
