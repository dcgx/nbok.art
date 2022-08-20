import React from 'react'
import styled from 'styled-components'
import Browser from './Browser'
import Button from './Button'

const Wrapper = styled.section`
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
  padding: 120px 0;
  h1 {
    color: #fff;
  }
  p {
    max-width: 600px;
    text-align: center;
    margin: 20px;
  }
`

const BrowserWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 1em;
`

const ExampleGallery = () => {
  return (
    <Wrapper>
      <h1>Beautiful and embeddable NFTs Gallery 😍</h1>
      <p>
        Add your NFTs Gallery to your website, streaming shows, crypto projects,
        social accounts, etc. Your imagination is unstoppable!
      </p>
      <div>
        <Button>Create Gallery</Button>
        <Button>Learn more</Button>
      </div>
      <BrowserWrapper>
        <Browser>
          <iframe
            height="100%"
            width="100%"
            src="http://localhost:3000/user"
            style={{ border: '1px solid #cecece', borderRadius: '10px' }}
          ></iframe>
        </Browser>
      </BrowserWrapper>
    </Wrapper>
  )
}

export default ExampleGallery
