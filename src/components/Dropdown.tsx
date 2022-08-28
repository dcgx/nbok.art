import { ScriptProps } from 'next/script'
import React, { ReactNode, RefObject } from 'react'
import styled from 'styled-components'

interface DropdownProps {
  children?: ReactNode
  ref?: RefObject<HTMLDivElement>
}

const Wrapper = styled.div<DropdownProps>`
  position: absolute;
  top: 100%;
  right: 0px;
  background: #fff;
  z-index: 10;
  box-shadow: rgb(0 0 0 / 14%) 0px 4px 10px -1px;
  min-width: 200px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const Dropdown = ({ children, ref }: DropdownProps) => {
  return <Wrapper ref={ref}>{children}</Wrapper>
}

export default Dropdown
