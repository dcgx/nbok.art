import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px auto;
  width: 100%;
  background-image: url('https://labartisan.net/demo/anftiz-demo/anftiz/assets/images/banner/bg.jpg');
  background-size: cover;
  background-position: center;

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

const BannerContainer = styled.div``
const BannerShape = styled.div`
  width: 500px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`

const BannerShapeItem = styled.div`
  img {
    border-radius: 10px;
    transition: all 0.3s ease;
    width: 100%;
  }
`

const Hero = () => {
  const nftItems = [
    {
      img: '/nft-items/01.gif'
    },
    {
      img: '/nft-items/02.jpeg'
    },
    {
      img: '/nft-items/03.gif'
    },
    {
      img: '/nft-items/04.jpeg'
    },
    {
      img: '/nft-items/05.jpeg'
    },
    {
      img: '/nft-items/06.jpeg'
    },
    {
      img: '/nft-items/07.gif'
    },
    {
      img: '/nft-items/08.jpeg'
    },
    {
      img: '/nft-items/09.jpeg'
    },
    {
      img: '/nft-items/10.gif'
    },
    {
      img: '/nft-items/11.jpeg'
    },
    {
      img: '/nft-items/12.jpeg'
    },
  
  ]

  return (
    <Wrapper>
      <BannerShape>
        {nftItems.map(({ img }, index) => {
          return (
            <BannerShapeItem>
              <img src={img} />
            </BannerShapeItem>
          )
        })}
      </BannerShape>
      <BannerContainer>
        <h1>Discover, collect, and sell extraordinary NFTs</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum
          mollitia quis modi.
        </p>
      </BannerContainer>

      <BannerShape>
        {nftItems.map(({ img }, index) => {
          return (
            <BannerShapeItem>
              <img src={img} />
            </BannerShapeItem>
          )
        })}
      </BannerShape>
    </Wrapper>
  )
}

export default Hero
