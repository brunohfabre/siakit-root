import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  NumberInput as NumberInputComponent,
} from '@siakit/form-components'
import { useField } from '@unform/core'

type NumberInputProps = {
  name: string
  label?: string
  placeholder?: string
  onChange?: (value: string) => void
  disabled?: boolean
}

export function NumberInput({
  name,
  label,
  placeholder,
  onChange,
  disabled,
}: NumberInputProps) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState(defaultValue ?? '')

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        return fieldValue
      },
      setValue: (_, value) => {
        setFieldValue(value)
      },
      clearValue: () => {
        setFieldValue('')
      },
    })
  }, [fieldName, registerField, fieldValue])

  function handleChange(value: string) {
    setFieldValue(value)

    if (onChange) {
      onChange(value)
    }
  }

  return (
    <FormControl error={error}>
      <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>

      <NumberInputComponent
        value={fieldValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </FormControl>
  )
}
