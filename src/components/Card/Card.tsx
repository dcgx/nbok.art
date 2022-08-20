import { ScriptProps } from 'next/script'
import React from 'react'
import styled from 'styled-components'

const StyledCardWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 15px;
  transition: box-shadow 0.25s ease-in-out;
  padding: 5px;
  margin: 5px;
  text-align: center;
`


type CardProps = {
  children?: React.ReactNode
}

const Card = ({ children }: CardProps) => {
  return (
    <StyledCardWrapper>
      {/* <div className="img">
        <img src="https://lh3.googleusercontent.com/1rD9cIr85WCNf4XW1j2wqVv1TlH9-tQ79mobmX3MSEcFB-zmHPhBcJx9cqL3wBURn3qkwHjf2BOkva74NHMlQEMGw2wSRBiEMdKQ_XU=w281" />
      </div>
      <div className="card-body">
        <div className="nft-title">Lofi Guy #123</div>
        <div className="nft-price">0.4</div>
      </div> */}
      {children}
    </StyledCardWrapper>
  )
}

export default Card
