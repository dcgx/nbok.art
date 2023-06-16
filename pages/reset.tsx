import type { NextPage } from 'next'
import Card from '../components/Card'
import Container from '../components/Container'
import LoginForm from '../components/LoginForm'
import ResetPasswordForm from '../components/ResetPasswordForm'
import AuthLayout from '../layouts/auth'

const Reset: NextPage = () => {
  return (
    <AuthLayout>
        <ResetPasswordForm></ResetPasswordForm>
    </AuthLayout>
  )
}

export default Reset
