import { ScriptProps } from 'next/script'
import React from 'react'
import styled from 'styled-components'

const StyledCardTitle = styled.h3`
  font-size: 1.5rem;
`

const CardTitle = ({ children }: ScriptProps) => {
  return <StyledCardTitle>{children}</StyledCardTitle>
}

export default CardTitle
