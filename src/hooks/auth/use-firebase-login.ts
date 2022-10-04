import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { useState } from 'react'

import { LoginPayload } from '../../schemas/login-schema'

export const useFirebaseLogin = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>()

  const login = (
    { email, password }: LoginPayload,
    onSuccess: (user: FirebaseAuthTypes.User) => void,
  ) => {
    setLoading(true)
    setError(undefined)
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => onSuccess(res.user))
      .catch(loginError => setError(loginError.message))
      .finally(() => setLoading(false))
  }

  return { loading, error, login }
}
