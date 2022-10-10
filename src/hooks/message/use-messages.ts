/* eslint-disable no-extra-semi */
import firestore from '@react-native-firebase/firestore'
import { compareAsc } from 'date-fns'
import { useEffect, useState } from 'react'

import { MESSAGES_COLLECTION } from '../../constants'
import { Message } from '../../types/message'

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([])

  const sortNewestFirst = (messagesToSort: Message[]) => {
    return [...messagesToSort].sort((a, b) =>
      compareAsc(new Date(a.createdAt), new Date(b.createdAt)),
    )
  }
  //for fetching messages from firebase
  useEffect(() => {
    ;(async () => {
      const messageCollection = await firestore()
        .collection<Message>(MESSAGES_COLLECTION)
        .get()
      const dbMessages = messageCollection.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }))
      const sortedMessages = sortNewestFirst(dbMessages)
      setMessages(sortedMessages)
    })()
  }, [])

  //for listening to new messages
  useEffect(() => {
    const subscriber = firestore()
      .collection(MESSAGES_COLLECTION)
      .onSnapshot(snapshot => {
        const dbMessages = snapshot.docs.map(doc => ({
          ...(doc.data() as Message),
          id: doc.id,
        }))
        const sortedMessages = sortNewestFirst(dbMessages)
        setMessages(sortedMessages)
      })
    return () => subscriber()
  }, [])
  return messages
}
