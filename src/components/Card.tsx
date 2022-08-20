import { ScriptProps } from 'next/script'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface CardProps {
  children?: ReactNode
  image?: string
  title?: string,
  shadow?: boolean
}

interface CardWrapperProps {
  shadow?: boolean
}


const CardWrapper = styled.div<CardWrapperProps>`
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: ${({shadow}) =>  shadow ? 'rgb(0 0 0 / 8%) 0px 4px 15px' : 'none'};
  transition: box-shadow 0.25s ease-in-out;
  margin: 5px;
  text-align: center;
  height: 100%;
`
const CardTitle = styled.h3``

const CardBody = styled.div`
padding: 5px 10px;
  h4, h5 {
    padding: 0;
    margin: 0;
    text-align: left;
    color: #55536f;
  }
`

const CardImage = styled.img`
  height: auto;
  width: 100%;
`

const Card = ({ children, image, title, shadow = false }: CardProps) => {
  return (
    <CardWrapper shadow={shadow} >
      <CardImage src={image}></CardImage>
      {title && <CardTitle>{title}</CardTitle>}
      <CardBody>{children}</CardBody>
    </CardWrapper>
  )
}

export default Card
