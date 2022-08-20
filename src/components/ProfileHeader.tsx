import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;

  .user-avatar {
    img  {
      width: 100px;
      border-radius: 9999px;
    }
  }

  .user-info {
    display: flex;
    flex-direction: column;
    margin: 0 20px;

    .username { 
      font-size: 30px;
      font-weight: 700;
    }
    .name{
      font-size: 20px;
      font-weight: 500;
      }
  }
`

const ProfileHeader = () => {
  return (
    <Wrapper>
      <div className="user-avatar">
        <img
          src="https://avatars3.githubusercontent.com/u/56496?s=460&v=4"
          alt="user avatar"
        />
      </div>
      <div className="user-info">
        <span className="username">@warni</span>
        <span className="name">NFT Gallery</span>
      </div>
    </Wrapper>
  )
}

export default ProfileHeader
