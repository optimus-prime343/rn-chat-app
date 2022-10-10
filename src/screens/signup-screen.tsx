import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from '@react-navigation/native'
import { Alert, Button, Center, Flex, Heading, Text, VStack } from 'native-base'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Keyboard } from 'react-native'
import { useToast } from 'react-native-toast-notifications'

import { FormInput } from '../components/common'
import { useFirebaseSignup } from '../hooks/auth'
import { signupSchema } from '../schemas/signup-schema'

const SignupScreen = () => {
  const { loading, error, signup } = useFirebaseSignup()

  const toast = useToast()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = handleSubmit(data =>
    signup(data, () => {
      toast.show('Signed up successfully')
      Keyboard.dismiss()
    }),
  )

  return (
    <Flex flex={1} p="2" justifyContent="center">
      <Heading mb="2">Sign up</Heading>
      <Text color="muted.400" mb="6">
        Create an account here
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
        <FormInput
          secureTextEntry
          placeholder="Confirm password"
          name="confirmPassword"
          control={control}
          error={errors.confirmPassword?.message}
        />
        <Button isLoading={loading} onPress={onSubmit}>
          Sign Up
        </Button>
        <Center>
          <Link to="/Login">Already have an account ? Login</Link>
        </Center>
      </VStack>
    </Flex>
  )
}

export default SignupScreen
