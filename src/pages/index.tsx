import type { NextPage } from 'next'
import styled from 'styled-components'
import BrowserNavbar from '../components/Browser/BrowserNavbar'
import BrowserWrapper from '../components/Browser/BrowserWrapper'
import Button from '../components/Button'
import Card from '../components/Card'

const StyledHomePage = styled.div`
  .hero {
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
  }

  .getting-started {
    display: flex;
    flex-direction: column;
    align-items: center;
    .getting-started-cards {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .example-gallery {
    background: rgb(248, 191, 138);
    background: linear-gradient(
      90deg,
      rgba(248, 191, 138, 1) 0%,
      rgba(243, 168, 255, 1) 100%
    );
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff !important;
    flex-direction: column;
    padding: 150px 0;
    h1 {
      color: #fff;
    }
    p {
      max-width: 600px;
      text-align: center;
      margin: 20px;
    }
  }
`

const Home: NextPage = () => {
  return (
    <StyledHomePage>
      <div className="hero">
        <div className="hero-info">
          <h1>
            Find, Store and sell NFTs in the increible world of revolut.art
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            ipsum nemo iure nihil tempore soluta sit, impedit consequuntur ea
            amet officiis expedita necessitatibus tenetur autem minus accusamus
            mollitia quis modi.
          </p>
        </div>
        <div className="hero-img">
          <img src="/hero/hero-main.jpeg" />
        </div>
      </div>

      <div className="getting-started">
        <h1>Getting started is so easy!</h1>
        <div className="getting-started-cards">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>

      <div className="example-gallery">
        <h1>Beautiful and embeddable NFTs Gallery 😍</h1>
        <p>
          Add your NFTs Gallery to your website, streaming shows, crypto
          projects, social accounts, etc. Your imagination is unstoppable!
        </p>
        <div>
          <Button>Create Gallery</Button>
          <Button>Learn more</Button>
        </div>

        <BrowserWrapper>
          <BrowserNavbar />
        </BrowserWrapper>
      </div>
    </StyledHomePage>
  )
}

export default Home
