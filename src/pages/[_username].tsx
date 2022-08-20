import React from 'react'
import Tabs from '../components/Tabs'
import ProfileGallery from '../components/ProfileGallery'
import ProfileHeader from '../components/ProfileHeader'
import styled from 'styled-components'
import { NextPage } from 'next'
import Container from '../components/Container'

const Username: NextPage = () => {
  const tabItems = ['Gallery', 'Wallets', 'Settings']

  return (
    <Container>
      <Tabs items={tabItems} />
      <ProfileHeader />
      <ProfileGallery />
    </Container>
  )
}

export default Username
