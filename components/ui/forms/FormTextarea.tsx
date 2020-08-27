import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function FormTextarea({ textareaLabel, ...rest }: any) {
  const { register } = useFormContext()
  const { name } = rest

  return (
    <div>
      <div>
        <label>{textareaLabel || name}</label>
      </div>
      <textarea
        ref={register({ required: rest.required })}
        htmlFor={name}
        id={name}
        style={{ color: '#000', height: '100px', width: '100%' }}
        {...rest}
      />
    </div>
  )
}
