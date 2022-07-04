import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Logo } from "@components"
import { mixins } from "@globalStyles"
import links from "../data/links"

const Footer = () => (
  <StyledFooter>
    <FooterInner css={mixins.wrapper}>
      <Logo />

      <FooterNav>
        <ul>
          {links.map(link => (
            <li key={link.title}>
              <Link to={link.to}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </FooterNav>
    </FooterInner>
  </StyledFooter>
)

export default Footer

const StyledFooter = styled.footer`
  background-color: var(--color-bg-secondary);
  padding-top: 2rem;
  padding-bottom: 2rem;
`

const FooterInner = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
  }
`

const FooterNav = styled.nav`
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
