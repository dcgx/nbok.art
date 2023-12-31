import React from 'react'
import Tabs from '../components/Tabs'
import NftGallery from '../components/NftGallery'
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
      <NftGallery />
    </ProfileLayout>
  )
}

export default Username
