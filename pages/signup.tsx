import type { NextPage } from 'next'
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
