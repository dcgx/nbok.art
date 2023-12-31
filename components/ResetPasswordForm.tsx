import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Card from './Card'
import Separator from './Separator'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`

const FormInput = styled.input`
  border-radius: 10px;
  font-weight: 600;
  font-family: Poppins, sans-serif;
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 0.8rem 1.2rem;
  font-size: 1.2rem;
  background: rgb(255, 255, 255);
  border: 2px solid rgb(205, 205, 206);
  color: rgb(70, 70, 72);
  margin-bottom: 1rem;
`

const ResetPasswordForm = () => {
  return (
    <>
      <Link href="/login">Go Back</Link>
      <h2>Reset your password</h2>
      <p>We'll send you an email so you can reset your password.</p>
      <Form>
        <FormInput type="email" placeholder="Email" />
        <Button block>Reset Password</Button>
      </Form>
    </>
  )
}

export default ResetPasswordForm
