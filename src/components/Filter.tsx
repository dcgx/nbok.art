import React, { ReactNode } from 'react'
import styled from 'styled-components'

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
`

const FilterItem = styled.div`
  border: 1px solid green;
  width: 90px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgb(249, 249, 249);
  border: 2px solid rgb(240, 240, 242);
  font-weight: bold;
  color: #525f7f;
  font-size: 1rem;
  &:hover {
    background: rgb(240, 240, 242);
    cursor: pointer;
  }
  &.active {
    background: rgb(56, 44, 60);
    color: rgb(240, 233, 243);
    border: none;
  }
  .selected {
    border: 2px solid rgb(0, 165, 255);
  }
`

interface FilterProps {
  children?: ReactNode
  items?: string[]
}

const Filter = ({ children, items }: FilterProps) => {
  if (items?.length === 0) {
    return <>{children}</>
  }

  return (
    <FilterWrapper>
      {items &&
        items.map((item, index) => {
          return <FilterItem key={index}>{item}</FilterItem>
        })}
    </FilterWrapper>
  )
}

export default Filter
{
  /* <FilterItem>All</FilterItem>
<FilterItem>Hidden</FilterItem> */
}
