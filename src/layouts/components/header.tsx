import styled from 'styled-components'
import { BiCog } from 'react-icons/bi'
import Button from '../../components/Button'
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px auto;
  max-width: 1400px;
  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.9rem;
    font-weight: 700;
    span  {
      color: #000;
    }

    img {
      margin-right: 10px;
      height: 80px;
    }
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <span>revolut.art</span>
      </div>

      <div>
        <Button>My Gallery</Button>
        <Button>
          <BiCog />
        </Button>
      </div>
    </StyledHeader>
  )
}

export default Header
