import type { NextPage } from 'next'
import styled from 'styled-components'
import Container from '../components/Container'
import ExampleGallery from '../components/ExampleGallery'
import GettingStarted from '../components/GettingStarted'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <GettingStarted />
      <ExampleGallery />
    </>
  )
}

export default Home
