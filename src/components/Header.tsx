import styled from 'styled-components'
import { BiCog } from 'react-icons/bi'
import { createRef, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { CgProfile } from 'react-icons/cg'
import { BiWalletAlt } from 'react-icons/bi'
import Dropdown from './Dropdown'
import DropdownLink from './DropdownLink'
import Separator from './Separator'
import { motion } from 'framer-motion'

const NavbarWrapper = styled.nav`
  box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
  max-width: 100vw;
  height: 72px;
  top: 0px;
  position: sticky;
  z-index: 120;
  transition: top 0.5s ease 0s;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
`

const NavbarLogo = styled.div`
  cursor: pointer;
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
      height: auto;
    }
  }
`

const NavbarItems = styled.ul`
  padding-left: 0;
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavbarItem = styled.li`
  padding: 0 15px;
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 72px;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  flex-shrink: 0;

  a {
    align-items: center;
    color: rgba(4, 17, 29, 0.75);
    display: flex;
    height: 100%;
    padding: 0px 10px;
    position: relative;
    width: 100%;
    text-decoration: none;

    &:hover {
      color: rgb(0, 0, 0) !important;
    }
  }

  svg {
    color: rgba(4, 17, 29, 0.75);
    &:hover {
      color: rgb(0, 0, 0) !important;
    }
  }
`

const Header = () => {
  const [dropdownActive, setDropwdownActive] = useState(false)
  const dropdown = createRef<HTMLDivElement>()
  useEffect(() => {
    if (!dropdownActive) return
    function handleClick(event: MouseEvent) {
      console.log(dropdown, 'dropdow')
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setDropwdownActive(false)
      }
    }
    window.addEventListener('click', handleClick)
    // clean up
    return () => window.removeEventListener('click', handleClick)
  }, [dropdownActive])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        animate={{ y: 0, opacity: 1 }}
      >
        <NavbarWrapper>
          <NavbarLogo>
            <Link href="/">
              <div className="logo">
                <img src="https://labartisan.net/demo/anftiz-demo/anftiz/assets/images/logo/logo.gif" />
              </div>
            </Link>
          </NavbarLogo>

          <NavbarItems>
            <NavbarItem>
              <Link href="/user">My Gallery</Link>
            </NavbarItem>
            <NavbarItem onClick={() => setDropwdownActive(!dropdownActive)}>
              <BiCog size={28} />
            </NavbarItem>
            <NavbarItem onClick={() => setDropwdownActive(!dropdownActive)}>
              <CgProfile size={28} />
            </NavbarItem>
            <NavbarItem onClick={() => setDropwdownActive(!dropdownActive)}>
              <BiWalletAlt size={28} />
            </NavbarItem>
            {dropdownActive && (
              <Dropdown ref={dropdown}>
                <DropdownLink>Wallets</DropdownLink>
                <DropdownLink>Settings</DropdownLink>
                <Separator></Separator>
                <DropdownLink>GitHub</DropdownLink>
                <DropdownLink>Contact</DropdownLink>
                <Separator></Separator>
                <DropdownLink>Logout</DropdownLink>
              </Dropdown>
            )}
          </NavbarItems>
        </NavbarWrapper>
      </motion.header>
    </>
  )
}

export default Header
