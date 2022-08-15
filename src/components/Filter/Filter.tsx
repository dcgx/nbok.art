import { ScriptProps } from 'next/script'
import React from 'react'
import styled from 'styled-components'
import FilterItem from './FilterItem'

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
`

const Filter = ({ children }: ScriptProps) => {
  return <StyledFilter>{children}</StyledFilter>
}

export default Filter
