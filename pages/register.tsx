import React, { Fragment, useState, useEffect } from 'react'
import { Flex, Card, Heading } from 'rebass'
import { Button } from '../components/Primitives'
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
  useEffect(() => console.log(process.env.API), [])

  return (
    <Fragment>
      <NavBar />
      <Flex
        style={{
          height: '90vh'
        }}
        alignItems="center"
        justifyContent="center"
        flexDirection="column">
        <Heading as="h1" textAlign="center" fontSize="calc(2em + 2vw)">
          Hello {name}!
        </Heading>
        <Card>
          <Form
            to="/"
            action={`${process.env.API}/reg`}
            body={[
              {
                name: 'username',
                type: 'text',
                onInput: e => setName(e.currentTarget.value),
                placeholder: 'How we can call you?',
                slug: 'Username'
              },
              {
                slug: 'Email',
                name: 'email',
                type: 'email',
                placeholder: 'hello@example.com',
                help: 'Email is only used for verification link and nothing else.'
              },
              {
                slug: 'Password',
                name: 'password',
                value: pwd,
                disabled: true
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
            <Button variant="primary" onClick={newPwd}>
              Create password
            </Button>
          </Form>
        </Card>
      </Flex>
    </Fragment>
  )
}

export default Register
