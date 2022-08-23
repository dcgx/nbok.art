import type { NextPage } from 'next'
import Card from '../components/Card'
import Container from '../components/Container'
import LoginForm from '../components/LoginForm'

const Login: NextPage = () => {
  return (
    <Container expanded background="#f0f2f5" height="100vh">
      <LoginForm></LoginForm> 
    </Container>
  )
}

export default Login
