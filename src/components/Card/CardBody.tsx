import { ScriptProps } from 'next/script'
import React from 'react'
import styled from 'styled-components'

const StyledCardBody = styled.p`
  padding: 2rem;
`

const CardBody = ({ children }: ScriptProps) => {
  return <StyledCardBody>{children }</StyledCardBody>
}

export default CardBody
