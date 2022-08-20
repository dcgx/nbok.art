import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  gap: 20px;
`

const GettingStarted = () => {
  return (
    <Wrapper>
      <h1>Getting started is so easy!</h1>
      <Cards>
        <Card
          title="Connect wallets"
          image="https://hcmstrategists.com/wp-content/uploads/2021/01/transfer-placeholder.jpeg"
        >
          Add as many wallets as you want, from Metamask, Wallet connect, and
          others.
        </Card>
        <Card
          title="Connect wallets"
          image="https://hcmstrategists.com/wp-content/uploads/2021/01/transfer-placeholder.jpeg"
        >
          Add as many wallets as you want, from Metamask, Wallet connect, and
          others.
        </Card>
        <Card
          title="Connect wallets"
          image="https://hcmstrategists.com/wp-content/uploads/2021/01/transfer-placeholder.jpeg"
        >
          Add as many wallets as you want, from Metamask, Wallet connect, and
          others.
        </Card>
      </Cards>
    </Wrapper>
  )
}

export default GettingStarted
