import React, { Fragment, useState, useEffect } from 'react'
import { Heading } from 'rebass'
import { Button, BasicContainer, Page } from '../components/Primitives'
import NavBar from '../components/Layout/NavBar'
import Form from '../components/Layout/Form'

const Register = () => {
  const [name, setName] = useState<string>('')
  const [pwd, setPwd] = useState<string>('')
  const [pwdLevel, setPwdLevel] = useState<string>('off')

  const newPwd = () => {
    fetch(`${process.env.API}/rand${pwdLevel === 'on' ? '' : '_dict'}`)
      .then(res => res.text())
      .then(text => setPwd(text))
  }

  useEffect(newPwd, [pwdLevel])
  return (
    <Fragment>
      <NavBar />
      <Page alignItems="center" justifyContent="center" flexDirection="column">
        <Heading as="h1" textAlign="center" fontSize="calc(1.8em + 2vw)">
          Hello {name}!
        </Heading>
        <BasicContainer>
          <Form
            to="/"
            action={`${process.env.API}/reg`}
            body={[
              {
                name: 'username',
                type: 'text',
                required: true,
                onInput: e => setName(e.currentTarget.value),
                placeholder: 'How we can call you?',
                slug: 'Username'
              },
              {
                slug: 'Email',
                name: 'email',
                type: 'email',
                required: true,
                placeholder: 'hello@example.com',
                help: 'Email is only used for verification link and nothing else.'
              },
              {
                slug: 'Password',
                name: 'password',
                value: pwd,
                readOnly: true,
                help:
                  'For better security, an algorithm generates a password instead of a person. It removes the human factor with passwords like "P@$$word123"'
              }
            ]}
            method="POST">
            <div>
              Complex password:
              <input
                type="checkbox"
                id="check"
                value={pwdLevel}
                onClick={() => setPwdLevel(pwdLevel === 'on' ? 'off' : 'on')}
              />
            </div>
            <Button type="button" variant="primary" onClick={newPwd}>
              Create password
            </Button>
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
        </BasicContainer>
      </Page>
    </Fragment>
  )
}

export default Register
