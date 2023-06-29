import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'
import ProfileLayout from '../layouts/profile'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Wallet: NextPage = () => {
  const [modalActive, setModalActive] = useState(true)

  return (
    <ProfileLayout>
      Wallet
      {modalActive && (
        <Modal onClose={() => setModalActive(false)} header="Connect wallets">
          <p>
            Clever.art will show the NFTs associated with your crypto wallet and
            add them to your virtual NFTs Gallery 🤩 Have questions?{' '}
            <a>Contact us</a>
          </p>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <ConnectButton />
            <Button block dark>
              Ethereum Wallet
            </Button>
            <Button block dark>
              Polygon Wallet
            </Button>
            <Button block dark>
              Solana Wallet
            </Button>
          </div>
        </Modal>
      )}
    </ProfileLayout>
  )
}

export default Wallet
