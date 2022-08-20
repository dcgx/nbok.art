import React from 'react'
import Tabs from '../components/Tabs'
import Gallery from '../components/Gallery'
import ProfileHeader from '../components/ProfileHeader'
import styled from 'styled-components'
import { NextPage } from 'next'
import Container from '../components/Container'
import EmptyNfts from '../components/EmptyNfts'

const Username: NextPage = () => {
  const tabItems = ['Gallery', 'Wallets', 'Settings']

  return (
    <Container>
      <Tabs items={tabItems} />
      <ProfileHeader />
      {/* <EmptyNfts /> */}
      <Gallery />
    </Container>
  )
}

export default Username
