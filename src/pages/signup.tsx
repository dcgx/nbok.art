import type { NextPage } from 'next'
import Card from '../components/Card'
import Container from '../components/Container'
import SignupForm from '../components/SignupForm'
import AuthLayout from '../layouts/auth'

const SignUp: NextPage = () => {
  return (
    <AuthLayout>
      <SignupForm></SignupForm>
    </AuthLayout>
  )
}

export default SignUp
