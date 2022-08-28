import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  children?: ReactNode
  primary?: boolean
  secondary?: boolean
  dark?: boolean,
  block?: boolean,
  onClick?: () => void
}

const StyledButton = styled.button<ButtonProps>`
  font-family: sans-serif;
  color: ${props => props.primary || props.dark ? '#fff' : '#c821ff'};
  background: ${(props) => (props.primary ? '#c821ff' : props.dark ? '#2d2d2f' : '#fafafa')};
  font-size: 18px;
  font-weight: 700;
  padding: 13px 15px;
  border: ${(props) => (props.primary ? 'none' : props.dark ? '1px solid #2d2d2f' : '1px solid #c821ff')};
  margin: 0 4px;
  border-radius: 7px;
  width: ${(props) => (props.block ? '100%' : 'auto')};
  &:hover {
    cursor: pointer;
    background: ${(props) => (props.primary ? '#c821ff' : props.dark ? '#2c2c2c' : '#fafafa')};
  }
`

const Button = ({ children, primary = true, secondary = false, block = false, dark = false, onClick}: ButtonProps) => {
  if(secondary) primary = false
  if(dark) {
    primary = false
    secondary = false
  }

  const handleClick = () => {
    onClick && onClick()
  }

  return (
    <StyledButton onClick={handleClick} primary={primary} secondary={secondary} block={block} dark={dark}>
      {children}
    </StyledButton>
  )
}

export default Button
