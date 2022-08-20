import React from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'
import Filter from '../Filter/Filter'
import FilterItem from '../Filter/FilterItem'

const StyledProfileGallery = styled.div`
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;

  }
`

const ProfileGallery = () => {
  return (
    <StyledProfileGallery>
      <Filter>
        <FilterItem>All</FilterItem>
        <FilterItem>Hidden</FilterItem>
      </Filter>

      <div className="gallery">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </StyledProfileGallery>
  )
}

export default ProfileGallery