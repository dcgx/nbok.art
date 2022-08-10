import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LandingLayout from '../layouts/landing'

const Home: NextPage = () => {
  return (
    <LandingLayout>
        <h1>Revolut Art Landing</h1>
    </LandingLayout>
  )
}

export default Home
