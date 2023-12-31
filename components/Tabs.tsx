import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

interface TabsProps {
  items: TabItemProps[]
}

interface TabItemProps {
  active?: boolean
  label?: string
  pathname: string
}

const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 50px 0;
`

const TabItem = styled.div<TabItemProps>`
  border: 1px solid green;
  width: 140px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: ${(props) => (props.active ? '#383440' : '#fff')};
  border: 2px solid rgb(240, 240, 242);
  font-weight: bold;
  color: ${(props) => (props.active ? '#fff' : '#525f7f ')};
  font-size: 1.1rem;
  &:hover {
    background: ${(props) => (props.active ? '#4f4b57' : '#fafafa')};
    cursor: pointer;
  }
  &.active {
    background: rgb(56, 44, 60);
    color: rgb(240, 233, 243);
    border: none;
  }
`

const Tabs = ({ items }: TabsProps) => {
  const router = useRouter()

  const handleClickTabItem = (pathname: string) => {
    if (pathname === '/[_username]') {
      router.push('/usertest')
      return
    }

    router.push(pathname)
  }

  return (
    <TabWrapper>
      {items &&
        items.map((item, index) => {
          const isActive = router.pathname === item.pathname
          return (
            <TabItem
              onClick={() => handleClickTabItem(item.pathname)}
              pathname={item.pathname}
              active={isActive}
              key={index}
            >
              {item.label}
            </TabItem>
          )
        })}
    </TabWrapper>
  )
}

export default Tabs
