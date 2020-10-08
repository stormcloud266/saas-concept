import styled from "styled-components"
// import { Link } from "gatsby"
// import Logo from "@components/Logo"

export const StyledFooter = styled.footer`
  background-color: var(--color-bg-light);
  padding-top: 2rem;
  padding-bottom: 2rem;
`

export const FooterInner = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
  }
`

export const FooterNav = styled.nav`
  ul {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  li {
    margin-left: 4rem;
  }

  li:first-child {
    margin-left: 0;
  }

  @media only screen and (max-width: 56.25em) {
    margin-top: 2rem;
    
    ul {
      justify-content: center;
    }
  }
`