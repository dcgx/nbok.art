import React from 'react'
import styled from 'styled-components'
import Tab from './Tab'

const StyledTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`

const Tabs = () => {
  return (
    <StyledTabs>
      <Tab>Gallery</Tab>
      <Tab>Wallets</Tab>
      <Tab>Settings</Tab>
    </StyledTabs>
  )
}

export default Tabs
