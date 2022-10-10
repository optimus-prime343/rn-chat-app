import { Box, FlatList } from 'native-base'
import React from 'react'
import { useWindowDimensions } from 'react-native'

import { Message } from '../../../types/message'
import { MessageItem } from './message-item'

export interface MessageListProps {
  messages: Message[]
}
export const MessageList = ({ messages }: MessageListProps) => {
  const { height } = useWindowDimensions()
  return (
    <Box height={height}>
      <FlatList
        flex={1}
        data={messages}
        renderItem={({ item: message }) => (
          <MessageItem key={message.id} message={message} />
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  )
}
