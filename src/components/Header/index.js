import React, { useState } from "react"
import { Link } from "gatsby"
import { Hamburger, Times, Sun, Moon } from '@images/icons'
import { StyledHeader, Nav, NavbarContainer, NavToggle, ThemeToggle } from "./styles"
import Logo from "@components/Logo"
import { mixins } from "@globalStyles"

import links from '../../data/links'

const Header = ({ isDark, themeContext }) => {
  const [isOpen, toggleNav] = useState(false)

  return (
    <StyledHeader className="header">
      <NavbarContainer css={mixins.wrapper}>
  
        <Logo />
  
        <NavToggle 
          onClick={() => toggleNav(!isOpen)}
          aria-label="toggle menu"
        >
          { isOpen ? <Times /> : <Hamburger /> }
        </NavToggle>
  
        <Nav isOpen={isOpen}>
          <ul>
            {
              links.map(link => (
                <li key={link.title}>
                  <Link 
                    to={link.to}
                    onClick={() => toggleNav(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))
            }
            <li>
              <ThemeToggle 
                onClick={() => themeContext.toggleDark()}
                // onClick={() => console.log(themeContext)}
                aria-label="change light/dark mode"
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
