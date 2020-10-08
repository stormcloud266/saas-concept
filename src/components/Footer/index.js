import React from "react"
import { Link }  from 'gatsby'
import { StyledFooter, FooterInner, FooterNav } from "./styles"
import Logo from "@components/Logo"
import { mixins } from "@globalStyles"
import links from '../../data/links'

const Footer = () => (
  <StyledFooter>
    <FooterInner css={mixins.wrapper}>

      <Logo />
      
      <FooterNav>
        <ul>
          {
            links.map(link => (
              <li key={link.title}>
                <Link 
                  to={link.to}
                >
                  {link.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </FooterNav>

    </FooterInner>
  </StyledFooter>
)

export default Footer
