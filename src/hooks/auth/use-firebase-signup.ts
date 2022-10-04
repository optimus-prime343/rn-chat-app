import auth, { type FirebaseAuthTypes } from '@react-native-firebase/auth'
import { useState } from 'react'

import { SignupPayload } from '../../schemas/signup-schema'

export const useFirebaseSignup = () => {
  const [error, setError] = useState<string | undefined>()
  const [loading, setLoading] = useState(false)

  const signup = (
    { email, password }: SignupPayload,
    onSuccess: (user: FirebaseAuthTypes.User) => void,
  ) => {
    setLoading(true)
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => onSuccess(res.user))
      .catch(authError => setError(authError.message))
      .finally(() => setLoading(false))
  }

  return { error, loading, signup }
}
