import React, { useState } from "react"
import { Link } from "gatsby"
import { Hamburger, Times } from '@images/icons'
import { StyledHeader, Nav, NavbarContainer, NavToggle } from "@styles/sections"
import Logo from "@components/logo"

import links from '../data/links'

const Header = () => {
  const [isOpen, toggleNav] = useState(false)

  return (
    <StyledHeader className="header">
      <NavbarContainer className="wrapper header__nav-container">
  
        <Logo />
  
        <NavToggle 
          onClick={() => toggleNav(!isOpen)}
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
          </ul>
        </Nav>
  
      </NavbarContainer>
    </StyledHeader>
  )
}

export default Header
