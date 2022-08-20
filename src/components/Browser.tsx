import { ScriptProps } from 'next/script'
import React from 'react'
import styled from 'styled-components'

const BrowserWrapper = styled.div`
  position: relative;
  display: flex;
  background: rgb(235, 235, 235);
  border-radius: 10px;
  padding: 5px;
  margin: 15px;
  flex-direction: column;
  width: 100%;
`

const BrowserNavbar = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 1rem;
  background: rgb(235, 235, 235);
  color: #000;
  margin: 5px;
  border-radius: 10px;

  img {
    height: 20px;
    margin-right: 1rem;
  }
`

const BrowserNavbarLink = styled.a``

const BrowserContent = styled.div`
  background: rgb(244, 244, 244);
  border-radius: 10px;
  border: 1px solid #e1e0e0;
  height: 500px;
  margin: 4px;
`

const Browser = ({ children }: ScriptProps) => {
  return (
    <BrowserWrapper>
      <BrowserNavbar>
        <img src="/favicon.ico" />
        <BrowserNavbarLink>revolut.art/diego</BrowserNavbarLink>
      </BrowserNavbar>
      <BrowserContent>{children}</BrowserContent>
    </BrowserWrapper>
  )
}

export default Browser
