import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const StyledLogo = styled.img``;

const Span = styled.span`
  font-weight: 700;
  font-size: 2.8rem;
`;

function Logo() {
  return (
    <LogoContainer>
      <StyledLogo src="./logo.png" alt="logo" />
      <Span>TransactionHub</Span>
    </LogoContainer>
  );
}

export default Logo;
