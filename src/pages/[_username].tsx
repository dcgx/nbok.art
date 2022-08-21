import React from 'react'
import Tabs from '../components/Tabs'
import Gallery from '../components/Gallery'
import ProfileHeader from '../components/ProfileHeader'
import styled from 'styled-components'
import { NextPage } from 'next'
import Container from '../components/Container'
import EmptyNfts from '../components/EmptyNfts'
import { useRouter } from 'next/router'
import ProfileLayout from '../layouts/profile'

const Username: NextPage = () => {
  return (
    <ProfileLayout>
      <ProfileHeader />
      {/* <EmptyNfts /> */}
      <Gallery />
    </ProfileLayout>
  )
}

export default Username
