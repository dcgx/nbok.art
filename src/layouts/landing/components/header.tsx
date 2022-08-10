import styled from "styled-components";
import Button from "../../../components/Button";

const StyledHeader = styled.header`
  border: 1px solid red;
  display: flex;
  width: 100%;
  max-width: 1410px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  .revolut-logo {
    width: 200px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <h1>revolut.art</h1>
      </div>
      <div>
        <Button>Create profile</Button>
        <Button>Login</Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
