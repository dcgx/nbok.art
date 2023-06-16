import { ScriptProps } from 'next/script'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Wrapper = styled.a`
  align-items: center;
  color: rgb(70, 70, 72);
  text-decoration: none;
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid rgb(244, 244, 244);

  &:hover {
    background: #f0efef;
    cursor: pointer;
  }
`

const DropdownLink = ({ children }: ScriptProps) => {
  return <Wrapper>{children}</Wrapper>
}

export default DropdownLink
