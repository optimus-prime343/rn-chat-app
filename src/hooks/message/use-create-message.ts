import firestore from '@react-native-firebase/firestore'
import { useCallback } from 'react'

import { MESSAGES_COLLECTION } from '../../constants'
import { CreateMessagePayload } from '../../types/message'

export const useCreateMessage = () => {
  const createMessage = useCallback(
    async (createMessagePayload: CreateMessagePayload) => {
      firestore()
        .collection(MESSAGES_COLLECTION)
        .add(createMessagePayload)
        .then(() => {
          console.log('Message added!')
        })
        .catch(error => console.log(error.message))
    },
    [],
  )
  return createMessage
}
