import React from 'react'
import styled from 'styled-components'

const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`

const TabItem = styled.div`
  border: 1px solid green;
  width: 140px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgb(249, 249, 249);
  border: 2px solid rgb(240, 240, 242);
  font-weight: bold;
  color: #525f7f;
  font-size: 1.1rem;
  &:hover {
    background: rgb(240, 240, 242);
    cursor: pointer;
  }
  &.active {
    background: rgb(56, 44, 60);
    color: rgb(240, 233, 243);
    border: none;
  }
`

interface TabsProps {
  items: string[]
}

const Tabs = ({ items }: TabsProps) => {
  return (
    <TabWrapper>
      {items &&
        items.map((item, index) => {
          return <TabItem key={index}>{item}</TabItem>
        })}
    </TabWrapper>
  )
}

export default Tabs
