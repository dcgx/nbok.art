import { ScriptProps } from 'next/script'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

const Container = ({ children }: ScriptProps) => {
  return <Wrapper>{children}</Wrapper>
}

export default Container
