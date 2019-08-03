import React, { InputHTMLAttributes, FormEvent, ReactNode, Fragment } from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import Tooltip from 'react-tooltip'
import { Flex } from 'rebass'
import { Input, HelpButton } from '../Primitives'

declare interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  slug?: string
  help?: ReactNode
}

declare interface FormInterface {
  to: string
  method: 'POST' | 'GET' | 'PUT' | 'DELETE'
  children?: ReactNode
  body: InputProps[]
  action: string
}

const StyledForm = styled.form`
  & > input:disabled {
    color: black;
  }
  h2 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
    display: inline-block;
  }
  button {
    display: block;
    width: 100%;
    margin-top: 0.5em;
  }
`

const Form = ({ to, action, method, children, body }: FormInterface) => {
  const sendForm = (e: FormEvent<HTMLFormElement>) => {
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
      {body.map((field: InputProps, i: number) => (
        <Fragment>
          <Flex>
            <h2>{field.slug}</h2>
            {field.help && (
              <Fragment>
                <HelpButton data-tip data-for={field.name}>
                  ?
                </HelpButton>
                <Tooltip id={field.name} aria-haspopup={true} role="info">
                  {field.help}
                </Tooltip>
              </Fragment>
            )}
          </Flex>

          <Input key={i} {...field} />
        </Fragment>
      ))}
      {children}
    </StyledForm>
  )
}

export default Form
