import React, { PropsWithChildren, useState } from 'react'
import {
  connectorsForWallets,
  getDefaultWallets,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit'
import {
  argentWallet,
  trustWallet,
  ledgerWallet
} from '@rainbow-me/rainbowkit/wallets'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum, base, zora } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const projectId = 'a6ba61a9d1fe7f43942c2d70bf1c9c92'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [publicProvider()]
)

const { wallets } = getDefaultWallets({
  appName: 'Nbok',
  projectId,
  chains
})

const demoAppInfo = {
  appName: 'Nbok'
}

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains })
    ]
  }
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient
})

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
