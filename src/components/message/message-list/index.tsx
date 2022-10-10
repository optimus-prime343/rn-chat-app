import { FlatList } from 'native-base'
import React from 'react'

import { Message } from '../../../types/message'
import { MessageItem } from './message-item'

export interface MessageListProps {
  messages: Message[]
}
export const MessageList = ({ messages }: MessageListProps) => {
  return (
    <FlatList
      inverted
      data={[...messages].reverse()}
      renderItem={({ item: message }) => (
        <MessageItem key={message.id} message={message} />
      )}
      keyExtractor={item => item.id}
    />
  )
}
