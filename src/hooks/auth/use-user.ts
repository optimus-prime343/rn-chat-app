import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { useEffect, useState } from 'react'

export const useUser = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(setUser)
    return unsubscribe
  }, [])
  return user
}
