import React, { InputHTMLAttributes, FormEvent, ReactNode } from 'react'
import Router from 'next/router'
import styled from 'styled-components'

interface FormInterface {
  to: string
  method: 'POST' | 'GET' | 'PUT' | 'DELETE'
  children?: ReactNode
  body: InputHTMLAttributes<HTMLInputElement>[]
  action: string
}

const StyledForm = styled.form`
  display: grid;
  place-items: center;
  grid-gap: 1em;
  & > input {
    border: 1px solid black;
    padding: 0.2em;
    font-size: calc(0.8em + 1vmin);
  }
`

const Form = ({ to, action, method, children, body }: FormInterface) => {
  const sendForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formElement = e.currentTarget

    const formContent = new FormData(formElement)

    if (!formElement.reportValidity()) {
      fetch(action, {
        method,
        body: formContent,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then((res: Response) => {
          res.status === 200 ? Router.push(to) : console.log(res.status)
        })
        .catch((e: ErrorEvent) => console.log(e.message))
    }
  }

  return (
    <StyledForm method={method} action={action} onSubmit={sendForm}>
      {body.map((field: InputHTMLAttributes<HTMLInputElement>, i: number) => (
        <input key={i} {...field} />
      ))}
      {children}
    </StyledForm>
  )
}

export default Form
