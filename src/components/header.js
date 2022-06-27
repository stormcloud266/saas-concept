import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Hamburger, Times, Sun, Moon } from "@images/icons"
import { Logo } from "@components"
import { mixins } from "@globalStyles"

import links from "../data/links"

const Header = ({ isDark, toggleDark }) => {
  const [isOpen, toggleNav] = useState(false)

  return (
    <StyledHeader className="header">
      <NavbarContainer css={mixins.wrapper}>
        <Logo />

        <NavToggle onClick={() => toggleNav(!isOpen)} aria-label="toggle menu">
          {isOpen ? <Times /> : <Hamburger />}
        </NavToggle>

        <Nav isOpen={isOpen}>
          <ul>
            {links.map(link => (
              <li key={link.title}>
                <Link to={link.to} onClick={() => toggleNav(false)}>
                  {link.title}
                </Link>
              </li>
            ))}
            <li>
              <ThemeToggle
                onClick={() => toggleDark()}
                aria-label="toggle dark mode"
              >
                {isDark ? <Sun /> : <Moon />}
              </ThemeToggle>
            </li>
          </ul>
        </Nav>
      </NavbarContainer>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

const NavToggle = styled.button`
  display: none;
  padding: 0.5rem;
  position: relative;
  z-index: 999;

  svg {
    stroke: var(--color-text-headers);
  }

  @media only screen and (max-width: 56.25em) {
    display: block;
  }
`

const ThemeToggle = styled.button`
  padding: 0.5rem;
  position: relative;
  z-index: 999;
  svg {
    stroke: var(--color-pink);
  }
`

const Nav = styled.nav`
  display: flex;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    margin-left: 7.2rem;
  }

  a {
    transition: color 0.2s;
  }

  a:hover {
    color: var(--color-pink);
  }

  @media only screen and (max-width: 56.25em) {
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transition: opacity 0.2s;

    position: absolute;
    background-color: var(--color-bg);
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;

    ul {
      flex-direction: column;
    }

    li {
      margin-left: 0;
      margin-bottom: 2.8rem;
      transition: opacity 0.2s, transform 0.2s;

      opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
      transform: ${({ isOpen }) =>
        isOpen ? "translateY(0)" : "translateY(1rem)"};

      &:nth-child(1) {
        transition-delay: 0.1s;
      }
      &:nth-child(2) {
        transition-delay: 0.15s;
      }
      &:nth-child(3) {
        transition-delay: 0.2s;
      }
      &:nth-child(4) {
        transition-delay: 0.25s;
      }
      &:nth-child(5) {
        transition-delay: 0.3s;
      }
    }

    a {
      font-size: 2.8rem;
      padding: 0.5rem 1rem;
      color: ${props =>
        props.theme.mode === "dark" ? "#FFFFFF" : "var(--color-text-headers)"};
    }
  }
`
