import { InputHTMLAttributes, useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  MaskInput as MaskInputComponent,
} from '@siakit/form-components'
import { MaskType } from '@siakit/mask'
import { useField } from '@unform/core'

type MaskInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  name: string
  mask: MaskType
  label?: string
  onChange?: (value: string) => void
}

export function MaskInput({
  name,
  mask,
  label,
  onChange,
  ...props
}: MaskInputProps) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState(defaultValue ?? '')

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        return fieldValue
      },
      setValue: (_, value) => {
        setFieldValue(value ?? '')
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

      <MaskInputComponent
        mask={mask}
        value={fieldValue}
        onChange={handleChange}
        {...props}
      />
    </FormControl>
  )
}
