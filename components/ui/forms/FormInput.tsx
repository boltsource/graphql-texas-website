import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function FormInput({
  inputLabel,
  type: enumType,
  ...rest
}: any) {
  const { register } = useFormContext()
  const { name } = rest
  const type = enumType.toLowerCase()

  return (
    <div className="my-sm">
      <div className="my-xs">
        {inputLabel && <label htmlFor={name}>{inputLabel || name}</label>}
      </div>
      <input
        ref={register({ required: rest.required })}
        id={name}
        type={type}
        style={{ color: '#000', height: '40px', width: '100%' }}
        {...rest}
      />
    </div>
  )
}
