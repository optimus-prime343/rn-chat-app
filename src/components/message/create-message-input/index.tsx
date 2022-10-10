import { Input, Pressable } from 'native-base'
import React, { useState } from 'react'
import { Keyboard } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'

import { useUser } from '../../../hooks/auth'
import { useCreateMessage } from '../../../hooks/message'
import { CreateMessagePayload } from '../../../types/message'

export const CreateMessageInput = () => {
  const [message, setMessage] = useState('')

  const user = useUser()
  const createMessage = useCreateMessage()

  const handleCreateMessage = () => {
    if (!user || !message) {
      return
    }
    const newMessage: CreateMessagePayload = {
      userId: user.uid,
      message,
      createdAt: new Date().toISOString(),
    }
    createMessage(newMessage)
    setMessage('')
    Keyboard.dismiss()
  }
  return (
    <Input
      value={message}
      onChangeText={setMessage}
      placeholder="Send message"
      rightElement={
        <Pressable mr="2" onPress={handleCreateMessage}>
          <Ionicon size={20} name="send-outline" />
        </Pressable>
      }
    />
  )
}
