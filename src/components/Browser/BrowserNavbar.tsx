import React from 'react'
import styled from 'styled-components'

const StyledBrowserNavbar = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 10px 1rem;
  background: rgb(244, 244, 244);
  margin: 5px;
  border-radius: 10px;
`

const BrowserNavbar = () => {
  return <StyledBrowserNavbar>BrowserNavbar</StyledBrowserNavbar>
}

export default BrowserNavbar
