import { Box } from 'native-base'
import React from 'react'

import { CreateMessageInput } from '../components/message/create-message-input'
import { MessageList } from '../components/message/message-list'
import { useMessages } from '../hooks/message'

const HomeScreen = () => {
  const messages = useMessages()
  return (
    <Box p="2" flex={1}>
      <MessageList messages={messages} />
      <CreateMessageInput />
    </Box>
  )
}

export default HomeScreen
