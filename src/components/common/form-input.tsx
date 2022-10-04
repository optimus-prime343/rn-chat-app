import { type IInputProps, FormControl, Input } from 'native-base'
import React from 'react'
import { type Control, type FieldValues, Controller } from 'react-hook-form'

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
  return (
    <FormControl isRequired={isRequired}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <Input
            {...rest}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {error && <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>}
    </FormControl>
  )
}
