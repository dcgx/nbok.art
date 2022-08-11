import { ScriptProps } from "next/script";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: sans-serif;
  color: #fff;
  background: rgb(200, 33, 255);
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
  border: 1px rgb(200, 33, 255) solid;
  margin: 0 4px;
  border-radius: 7px;
  &:hover {
    cursor: pointer;
    background: rgb(173, 31, 220);
  }
`;

const Button = ({ children }: ScriptProps) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
