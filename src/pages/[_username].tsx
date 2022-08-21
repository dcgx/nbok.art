import React from 'react'
import Tabs from '../components/Tabs'
import Gallery from '../components/Gallery'
import ProfileHeader from '../components/ProfileHeader'
import styled from 'styled-components'
import { NextPage } from 'next'
import Container from '../components/Container'
import EmptyNfts from '../components/EmptyNfts'
import { useRouter } from 'next/router'

const Username: NextPage = () => {
  const tabItems = [
    { label: 'Gallery', pathname: '/[_username]' },
    { label: 'Wallets', pathname: '/wallets' },
    { label: 'Settings', pathname: '/settings' }
  ]

  const router = useRouter()

  console.log(router.pathname, 'pathname')

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
