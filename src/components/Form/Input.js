import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

export default function Input({ name, label, ...rest }) {

  const inputRef = useRef(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {

    registerField({
      name: fieldName,
      ref: inputRef,

      getValue: ref => {
        return ref.current.value
      },

      setValue: (ref, value) => {
        ref.current.value = value
      },

      clearValue: ref => {
        ref.current.value = ''
      },

    })

  }, [fieldName, registerField])

  return (
    <div>
      {label && <label htmlFor={fieldName} className={error && 'has-error-label'}>{label}</label>}
      {error && <span className='has-error'>{error}</span>}

      <input 
        ref={inputRef} 
        defaultValue={defaultValue} 
        {...rest} />
        
    </div>
    
  )
}