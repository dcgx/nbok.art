import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 65px auto;

  .hero-info {
    padding: 30px;
    margin: 0 auto;
    width: 600px;
    h1 {
      font-size: 3rem;
    }
    p {
      color: rgb(123, 123, 123);
    }
  }

  .hero-img {
    padding: 20px;
    img {
      width: 100%;
      border-radius: 24px;
    }
  }
`

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-info">
        <h1>Find, Store and sell NFTs in the increible world of revolut.art</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum
          nemo iure nihil tempore soluta sit, impedit consequuntur ea amet
          officiis expedita necessitatibus tenetur autem minus accusamus
          mollitia quis modi.
        </p>
      </div>
      <div className="hero-img">
        <img src="/hero/hero-main.jpeg" />
      </div>
    </Wrapper>
  )
}

export default Hero
