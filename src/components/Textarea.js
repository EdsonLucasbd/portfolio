import { useRef, useEffect } from 'react'

import { useField } from '@unform/core'

export default function Textarea({ name, label, rows = 15, cols = 40, ...rest }) {
  const textareaRef = useRef(null)
  const { fieldName, defaultValue = '', registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef,
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
      {label && <label htmlFor={fieldName}>{label}</label>}

      <textarea
        ref={textareaRef}
        id={fieldName}
        defaultValue={defaultValue}
        rows={rows}
        cols={cols}
        {...rest}
      />

      {error && <span>{error}</span>}
    </div>
  )
}
