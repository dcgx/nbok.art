import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Filter from './Filter'

const Wrapper = styled.div`
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
  }
`

const Gallery = () => {
  const filterItems = ['All', 'Hidden']

  return (
    <Wrapper>
      <Filter items={filterItems}></Filter>

      <div className="gallery">
        <article>
          <a
            href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/71599777317896889596593422567297748181657612122279694726789609752289104363521"
            target="_blank"
          >
            <Card
              shadow
              image="https://img.seadn.io/files/7c63aec94828a6d28b13d7b85a418138.png?fit=max&w=600"
            >
              <h5>Lady Apes</h5>
            </Card>
          </a>
        </article>

        <article>
          <a
            href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/71599777317896889596593422567297748181657612122279694726789609752289104363521"
            target="_blank"
          >
            <Card
              shadow
              image="https://img.seadn.io/files/7c63aec94828a6d28b13d7b85a418138.png?fit=max&w=600"
            >
              <h5>Lady Apes</h5>
            </Card>
          </a>
        </article>

        <article>
          <a
            href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/71599777317896889596593422567297748181657612122279694726789609752289104363521"
            target="_blank"
          >
            <Card
              shadow
              image="https://img.seadn.io/files/7c63aec94828a6d28b13d7b85a418138.png?fit=max&w=600"
            >
              <h5>Lady Apes</h5>
            </Card>
          </a>
        </article>
      </div>
    </Wrapper>
  )
}

export default Gallery
