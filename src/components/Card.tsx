import { ScriptProps } from 'next/script'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  /* box-shadow: rgb(0 0 0 / 8%) 0px 4px 15px; */
  transition: box-shadow 0.25s ease-in-out;
  padding: 5px;
  margin: 5px;
  text-align: center;
`
const Title = styled.h3``

const Body = styled.p``

const Image = styled.img`
  height: 210px;
`

interface CardProps {
  children?: ReactNode
  image?: string
  title?: string
}

const Card = ({ children, image, title }: CardProps) => {
  return (
    <Wrapper>
      <Image src={image}></Image>
      <Title>{title}</Title>
      <Body>{children}</Body>
    </Wrapper>
  )
}

{
  /* <div className="img">
        <img src="https://lh3.googleusercontent.com/1rD9cIr85WCNf4XW1j2wqVv1TlH9-tQ79mobmX3MSEcFB-zmHPhBcJx9cqL3wBURn3qkwHjf2BOkva74NHMlQEMGw2wSRBiEMdKQ_XU=w281" />
      </div>
      <div className="card-body">
        <div className="nft-title">Lofi Guy #123</div>
        <div className="nft-price">0.4</div>
      </div> */
}

export default Card
