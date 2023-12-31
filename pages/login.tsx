import type { NextPage } from 'next'
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
