import type { NextPage } from 'next'
import Card from '../components/Card'
import Container from '../components/Container'

const SignUp: NextPage = () => {
  return (
    <Container expanded background="#f0f2f5" height="100vh">
      <h2>Show off your NFTs like never before!</h2>
      <Card>
        <h2>Login Into Revolut.art</h2>
      </Card>
    </Container>
  )
}

export default SignUp
