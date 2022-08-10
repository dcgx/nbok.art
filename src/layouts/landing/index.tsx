import { ScriptProps } from "next/script";
import styled from "styled-components";
import Footer from "./components/footer";
import Header from "./components/header";

const StyledLanding = styled.div`
  margin: 0;
  padding: 0;
`;

const LandingLayout = ({ children }: ScriptProps) => {
  return (
    <StyledLanding>
      <Header />
      <main>
        from layout
        {children}
      </main>
      <Footer />
    </StyledLanding>
  );
};
export default LandingLayout;
