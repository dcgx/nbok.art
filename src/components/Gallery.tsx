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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Wrapper>
  )
}

export default Gallery
