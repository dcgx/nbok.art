import type { NextPage } from 'next'
import Card from '../components/Card'
import Container from '../components/Container'
import LoginForm from '../components/LoginForm'
import AuthLayout from '../layouts/auth'

const Login: NextPage = () => {
  return (
    <AuthLayout>
      <LoginForm></LoginForm>
    </AuthLayout>
  )
}

export default Login
