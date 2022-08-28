import { ScriptProps } from 'next/script'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { AiOutlineCloseCircle } from 'react-icons/ai'

interface ModalProps {
  children: ReactNode
  header?: string
  onClose?: () => void
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;
  font-size: 14px;
  transition: all 300ms ease 0s;
  display: block;
  animation-duration: 300ms;
  animation-name: cdDSwa;
`

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.45);
  transition: all 0.3s ease 0s;
  visibility: visible;
  opacity: 1;
`

const Content = styled.div`
  overflow: hidden;
  position: absolute;
  inset: 10px;
  background-color: rgb(244, 244, 244);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  max-width: 540px;
  margin: 0px auto;
  padding: 20px;

  @media (min-width: 700px) {
    width: 100%;
    top: 50%;
    left: 50%;
    bottom: initial;
    right: initial;
    transform: translate(-50%, -50%);
    max-height: 85vh;
  }
`

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

const HeaderContent = styled.h2``

const CloseButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`

const Body = styled.div``

const Modal = ({ children, header, onClose}: ModalProps) => {
  const handleClose = () => {
    onClose && onClose()
  }

  return (
    <Wrapper>
      <Overlay>
        <Content>
          <Header>
            <HeaderContent>{header}</HeaderContent>
            <CloseButton onClick={handleClose}>
              <AiOutlineCloseCircle size={28} />
            </CloseButton>
          </Header>
          <Body>{children}</Body>
        </Content>
      </Overlay>
    </Wrapper>
  )
}

export default Modal
