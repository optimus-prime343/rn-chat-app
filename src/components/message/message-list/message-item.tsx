import { format } from 'date-fns'
import { Box, Text } from 'native-base'
import React from 'react'

import { useUser } from '../../../hooks/auth'
import { Message } from '../../../types/message'

export interface MessageItemProps {
  message: Message
}
export const MessageItem = ({ message }: MessageItemProps) => {
  const user = useUser()

  const formattedCreatedAt = format(new Date(message.createdAt), 'PPpp')
  const isUserMessage = user?.uid === message.userId

  const styles = {
    bg: isUserMessage ? 'primary.600' : 'gray.200',
    color: isUserMessage ? 'white' : 'gray.800',
  }
  return (
    <Box alignItems={isUserMessage ? 'flex-end' : 'flex-start'} mb="6">
      <Text fontSize="md" px="4" py="2" rounded="lg" {...styles}>
        {message.message}
      </Text>
      <Text mr="2" mt="2">
        {formattedCreatedAt}
      </Text>
    </Box>
  )
}
