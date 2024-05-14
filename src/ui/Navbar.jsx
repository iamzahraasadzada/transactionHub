import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const StyledLink = styled(NavLink)`
  color: var(--gray-400);
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.9rem;
  line-height: 1.625rem;
  transition: color 0.5s;
  &:hover {
    color: #18122f;
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <StyledLink to="/">History</StyledLink>
      <StyledLink to="/makePayment">Pay</StyledLink>
    </StyledNavbar>
  );
}

export default Navbar;
