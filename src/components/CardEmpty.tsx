import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  box-shadow: rgb(0 0 0 / 14%) 0px 4px 10px -1px;
  border-radius: 30px;
  border: 1px solid #eaeaea;
  position: relative;
  overflow: hidden;
`

const CardEmpty = () => {
  return <Wrapper></Wrapper>
}

export default CardEmpty
