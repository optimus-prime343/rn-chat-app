import { formatDistanceToNow } from 'date-fns'
import { Avatar, Box, HStack, Text, VStack } from 'native-base'
import React from 'react'
import { useWindowDimensions } from 'react-native'

import { useUser } from '../../../hooks/auth'
import { Message } from '../../../types/message'

export interface MessageItemProps {
  message: Message
}
export const MessageItem = ({ message }: MessageItemProps) => {
  const { width } = useWindowDimensions()

  const user = useUser()

  const formattedCreatedAt = formatDistanceToNow(new Date(message.createdAt), {
    addSuffix: true,
  })
  const isUserMessage = user?.uid === message.userId

  const styles = {
    fontSize: 'md',
    px: 4,
    py: 2,
    rounded: '2xl',
    borderColor: 'gray.200',
    maxWidth: width * 0.8,
    borderWidth: isUserMessage ? 1 : 0,
    bg: isUserMessage ? 'gray.100' : 'primary.600',
    color: isUserMessage ? 'gray.800' : 'white',
    borderTopRightRadius: isUserMessage ? '0' : '2xl',
    borderTopLeftRadius: isUserMessage ? '2xl' : 0,
  }
  return (
    <Box mb="6">
      <HStack space="2" flexDirection={isUserMessage ? 'row-reverse' : 'row'}>
        <Avatar
          source={require('../../../assets/images/default_profile.png')}
        />
        <VStack space="2">
          <Text {...styles}>{message.message}</Text>
          <Text alignSelf={isUserMessage ? 'flex-end' : 'flex-start'}>
            {formattedCreatedAt}
          </Text>
        </VStack>
      </HStack>
    </Box>
  )
}
