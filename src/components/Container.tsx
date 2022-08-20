import { ScriptProps } from 'next/script'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1020px;
  margin: 0 auto;
`

const Container = ({ children }: ScriptProps) => {
  return <Wrapper>{children}</Wrapper>
}

export default Container
