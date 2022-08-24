import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 65px auto;

  .hero-info {
    padding: 30px;
    margin: 0 auto;
    h1 {
      font-size: 3rem;
    }
    p {
      color: rgb(123, 123, 123);
      font-size: 1.3rem;
    }
  }

  .hero-img {
    padding: 20px;
    img {
      width: 100%;
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
    }
  }
`

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-info">
        <h1>Discover, collect, and sell extraordinary NFTs</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum
          mollitia quis modi.
        </p>
      </div>
      <div className="hero-img">
        <Card shadow rounded image="/hero/hero-main.jpeg">
          <span>Example</span>
        </Card>
      </div>
    </Wrapper>
  )
}

export default Hero
