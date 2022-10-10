import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from '@react-navigation/native'
import { Alert, Button, Center, Flex, Heading, Text, VStack } from 'native-base'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Keyboard } from 'react-native'
import { useToast } from 'react-native-toast-notifications'

import { FormInput } from '../components/common'
import { useFirebaseLogin } from '../hooks/auth'
import { loginSchema } from '../schemas/login-schema'

const LoginScreen = () => {
  const { login, error, loading } = useFirebaseLogin()

  const toast = useToast()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = handleSubmit(data =>
    login(data, () => {
      toast.show('Logged in successfully')
      Keyboard.dismiss()
    }),
  )

  return (
    <Flex p="2" flex={1} justifyContent="center">
      <Heading mb="2">Sign in</Heading>
      <Text color="muted.400" mb="6">
        Welcome back
      </Text>
      <VStack space={4}>
        {error && <Alert status="error">{error}</Alert>}
        <FormInput
          placeholder="Email address"
          name="email"
          control={control}
          error={errors.email?.message}
        />
        <FormInput
          secureTextEntry
          placeholder="Password"
          name="password"
          control={control}
          error={errors.password?.message}
        />
        <Button isLoading={loading} onPress={onSubmit}>
          Login
        </Button>
        <Center>
          <Link to="/Signup">Dont have an account? Signup</Link>
        </Center>
      </VStack>
    </Flex>
  )
}

export default LoginScreen
