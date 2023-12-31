import { ScriptProps } from 'next/script'
import React from 'react'
import Container from '../components/Container'
import Tabs from '../components/Tabs'

const ProfileLayout = ({ children }: ScriptProps) => {
  const tabItems = [
    { label: 'Gallery', pathname: '/[_username]' },
    { label: 'Wallets', pathname: '/wallets' },
    { label: 'Settings', pathname: '/settings' }
  ]

  return (
    <Container>
      <Tabs items={tabItems} />
      {children}
    </Container>
  )
}

export default ProfileLayout
