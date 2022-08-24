import React from 'react'
import styled from 'styled-components'
import Card from './Card'

import { IoWalletOutline } from 'react-icons/io5'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 60px 0;
  gap: 20px;
  text-align: center;
`

const GettingStarted = () => {
  return (
    <Wrapper>
      <h1>Getting started is so easy!</h1>
      <Cards>
        <Card>
          <IoWalletOutline size={70} />
          <h4 className='text-center my-2'>Connect wallets</h4>
          <p>
            Add as many wallets as you want, from Metamask, Wallet connect, and
            others.
          </p>
        </Card>
        <Card>
          <IoWalletOutline size={70} />
          <h4 className='text-center my-2'>Create your NFTs Gallery</h4>
          <p>
            Add as many wallets as you want, from Metamask, Wallet connect, and
            others.
          </p>
        </Card>
        <Card>
          <IoWalletOutline size={70} />
          <h4 className='text-center my-2'>Share it everywhere</h4>
          <p>
            Add as many wallets as you want, from Metamask, Wallet connect, and
            others.
          </p>
        </Card>
      </Cards>
    </Wrapper>
  )
}

export default GettingStarted
