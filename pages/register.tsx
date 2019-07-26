import React, { useState, useEffect } from 'react'
import { Heading as H1, Card, Flex } from 'rebass'
import styled from 'styled-components'
import NavBar from '../components/Layout/NavBar'
import Form from '../components/Layout/Form'

const Heading = styled(H1)`
  font-size: ${({ theme }) => theme.h1};
`

const Register = () => {
  const [name, setName] = useState<string>('')
  const [pwd, setPwd] = useState<string>('')
  const [pwdLevel, setPwdLevel] = useState<string>('off')

  useEffect(() => {
    fetch(`https://api.komfy.now.sh/rand${pwdLevel === 'on' && '_dict'}`)
      .then(res => res.text())
      .then(text => setPwd(text))
  }, [pwd])

  return (
    <Flex alignItems="center" justifyContent="center" flexDirection="column" flexWrap="wrap" css={{ height: '100vh' }}>
      <NavBar />
      <Heading as="h1" textAlign="center">
        Hello {name}!
      </Heading>
      <Card boxShadow="0 0 16px rgba(0, 0, 0, .25)" m="2em" p="2em">
        <Form
          to="/"
          action="https://api.komfy.now.sh/reg"
          body={[
            {
              name: 'username',
              type: 'text',
              onInput: e => setName(e.currentTarget.value),
              placeholder: 'How we can call you?'
            },
            {
              name: 'email',
              type: 'email',
              placeholder: 'hello@example.com'
            }
          ]}
          method="POST">
          <button onClick={() => setPwd(pwd)}>Create password</button>
          <div>
            Complex password:
            <input type="checkbox" value={pwdLevel} onChange={() => setPwdLevel(pwdLevel ? 'on' : 'off')} />
          </div>

          {pwd}
          <input name="password" value={pwd} disabled />
        </Form>
      </Card>
    </Flex>
  )
}

export default Register
