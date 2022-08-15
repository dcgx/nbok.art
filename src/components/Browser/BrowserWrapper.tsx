import { ScriptProps } from 'next/script'
import React from 'react'
import styled from 'styled-components'

const StyledBrowserWrapper = styled.div`
  position: relative;
  display: flex;
  background: rgb(235, 235, 235);
  border-radius: 10px;
  padding: 5px;
  margin: 15px;
  flex-direction: column;
  width: 100%;
`

const BrowserWrapper = ({ children }: ScriptProps) => {
  return <StyledBrowserWrapper>{children}</StyledBrowserWrapper>
}

export default BrowserWrapper
