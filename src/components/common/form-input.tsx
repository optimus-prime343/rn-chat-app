import {
  type IInputProps,
  FormControl,
  Input,
  Pressable,
  Text,
} from 'native-base'
import React, { useState } from 'react'
import { type Control, type FieldValues, Controller } from 'react-hook-form'
import FeatherIcon from 'react-native-vector-icons/Feather'

export interface FormInputProps<TFieldValues extends FieldValues = any>
  extends IInputProps {
  name: string
  control: Control<TFieldValues, any>
  label?: string
  isRequired?: boolean
  error?: string
}
export const FormInput = ({
  label,
  isRequired,
  error,
  name,
  control,
  ...rest
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(rest.secureTextEntry)
  const toggleShowPassword = () => setShowPassword(prev => !prev)

  return (
    <FormControl isRequired={isRequired}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <Input
            {...rest}
            secureTextEntry={showPassword}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            InputRightElement={
              rest.secureTextEntry ? (
                <Pressable mr="2" onPress={toggleShowPassword}>
                  <FeatherIcon
                    size={15}
                    name={showPassword ? 'eye-off' : 'eye'}
                  />
                </Pressable>
              ) : undefined
            }
          />
        )}
      />
      {error && (
        <Text mt="2" color="red.400">
          {error}
        </Text>
      )}
    </FormControl>
  )
}
