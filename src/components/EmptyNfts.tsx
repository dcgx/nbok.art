import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import CardEmpty from './CardEmpty'

const Wrapper = styled.div`
  position: relative;
`

const Modal = styled.div`
  padding: 2rem;
  background: rgb(255, 255, 255);
  z-index: 15;
  border-radius: 30px;
  box-shadow: rgb(0 0 0 / 14%) 0px 4px 10px -1px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0px);
  top: 80px;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  height: 300px;
`
const CardEmptyOverlay = styled.div`
  background: rgba(255, 255, 255, 0.6);
  position: absolute;
  top: -10px;
  left: -10px;
  width: 100%;
  height: 100%;
  z-index: 5;
  padding: 20px;

`

const EmptyNfts = () => {
  return (
    <Wrapper>
      <Modal>
        <h2>Your NFTs Gallery is empty</h2>

        <p>
          Connect your wallets to show cool NFTs in
          <br />
          your Gallery.
        </p>

        <Button>Connect Wallets</Button>
      </Modal>
      <Cards>
        <CardEmpty />
        <CardEmpty />
        <CardEmpty />
      </Cards>
      <Cards>
        <CardEmpty />
        <CardEmpty />
        <CardEmpty />
      </Cards>
      <CardEmptyOverlay />
    </Wrapper>
  )
}

export default EmptyNfts
