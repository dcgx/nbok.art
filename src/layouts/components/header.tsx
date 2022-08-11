import styled from "styled-components";
import Button from "../../components/Button";
import { BiCog } from "react-icons/bi";
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0px;
  .logo {
    color: rgb(173, 31, 220);
    text-transform: lowercase;
    font-weight: 700;
  }

`;

const Header = () => {
  return (
    <StyledHeader>
      <h1 className="logo"></h1>

      <div>
        <Button>My Gallery</Button>
        <Button>
          <BiCog />
        </Button>
      </div>
    </StyledHeader>
  );
};

export default Header;