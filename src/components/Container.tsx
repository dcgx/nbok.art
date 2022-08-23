import { ScriptProps } from 'next/script'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface ContainerProps {
  children?: ReactNode,
  expanded?: boolean,
  background?: string,
  height?: string,
} 

const Wrapper = styled.div<ContainerProps>`
  max-width: ${props => props.expanded ? '100%' : '1020px'};
  margin: 0 auto;
  background-color: ${props => props.background};
  height: ${props => props.height};
`

const Container = ({ children, expanded = false, height = 'auto', background = '#fff' }: ContainerProps) => {
  return <Wrapper expanded={expanded} background={background} height={height}>{children}</Wrapper>
}

export default Container
