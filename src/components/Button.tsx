import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  children?: ReactNode
  primary?: boolean
  secondary?: boolean
}

const StyledButton = styled.button<ButtonProps>`
  font-family: sans-serif;
  color: ${props => props.primary ? '#fff' : '#c821ff'};
  background: ${(props) => (props.primary ? '#c821ff' : '#fafafa')};

  font-size: 18px;
  font-weight: 700;
  padding: 10px;
  border: ${(props) => (props.primary ? 'none' : '1px solid #c821ff')};
  margin: 0 4px;
  border-radius: 7px;
  &:hover {
    cursor: pointer;
    background: ${(props) => (props.primary ? '#c821ff' : '#fafafa')};
  }
`

const Button = ({ children, primary = true, secondary = false}: ButtonProps) => {
  if(secondary) primary = false

  return (
    <StyledButton primary={primary} secondary={secondary}>
      {children}
    </StyledButton>
  )
}

export default Button
