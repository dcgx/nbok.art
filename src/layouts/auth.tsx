import type { NextPage } from 'next'
import { ScriptProps } from 'next/script'
import styled from 'styled-components'
import Card from '../components/Card'
import LoginForm from '../components/LoginForm'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 5em;
  height: 100vh;
  background: #f0f2f5;
`

const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  position: relative;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  overflow: hidden;
  margin-top: 1rem;
  width: 470px;
  text-align: center;
`

const AuthLayout = ({ children }: ScriptProps) => {
  return (
    <Wrapper>
      <Container>
        {children}
        {/* <div>
          <h2>Login Into Revolut.art</h2>
          <Form>
            <FormInput type="text" placeholder="Email" />
            <FormInput type="password" placeholder="Password" />

            <Button block>Entrar</Button>
            <Link href="/reset">Reset password?</Link>
            <Separator />
            <Link href="/reset">Create new Account</Link>
          </Form>
        </div> */}
      </Container>
    </Wrapper>
  )
}

export default AuthLayout
