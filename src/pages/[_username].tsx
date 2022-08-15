import React from 'react'
import Tabs from '../components/Tabs/Tabs'
import ProfileGallery from '../components/ProfileGallery'
import ProfileHeader from '../components/ProfileHeader'
import styled from 'styled-components'
import { NextPage } from 'next'

const StyledUsernamePage = styled.section`
  max-width: 1020px;
  margin: 0 auto;
`

const Username: NextPage = () => {
  return (
    <StyledUsernamePage>
      <Tabs />
      <ProfileHeader />
      <ProfileGallery />
    </StyledUsernamePage>
  )
}

export default Username
