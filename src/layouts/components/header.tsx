import styled from 'styled-components'
import { BiCog } from 'react-icons/bi'
import Button from '../../components/Button'
import Dropdown from '../../components/Dropdown'
import { useState } from 'react'
import DropdownLink from '../../components/DropdownLink'
import Separator from '../../components/Separator'
import Link from 'next/link'
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px auto;
  max-width: 1400px;
  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.9rem;
    font-weight: 700;
    span  {
      color: rgb(200, 33, 255);
    }

    img {
      margin-right: 10px;
      height: 80px;
    }
  }
`

const Header = () => {
  const [dropdownActive, setDropwdownActive] = useState(false)

  return (
    <StyledHeader>
      <Link href="/" style={{ cursor: 'pointer' }}>
        <div className="logo">
          <span>Revolut.Art</span>
        </div>
      </Link>

      <div className="relative">
        <Button>My Gallery</Button>
        <Button onClick={() => setDropwdownActive(!dropdownActive)} secondary>
          <BiCog />
        </Button>

        {dropdownActive && (
          <Dropdown>
            <DropdownLink>Wallets</DropdownLink>
            <DropdownLink>Settings</DropdownLink>
            <Separator></Separator>
            <DropdownLink>GitHub</DropdownLink>
            <DropdownLink>Contact</DropdownLink>
            <Separator></Separator>
            <DropdownLink>Logout</DropdownLink>
          </Dropdown>
        )}
      </div>
    </StyledHeader>
  )
}

export default Header
