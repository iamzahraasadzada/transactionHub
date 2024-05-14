import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";

const StyledHeader = styled.div`
  background-color: rgb(255, 255, 255);
  z-index: 999;
  padding: 2rem;
  position: fixed;
  /* margin-bottom: 40rem; */
  top: 0%;
  bottom: auto;
  left: 0%;
  right: 0%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;

const Container = styled.div`
  max-width: 115rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <Navbar />
      </Container>
    </StyledHeader>
  );
}

export default Header;
