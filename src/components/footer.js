import React from "react"
import NavLinks from '@components/navLinks'
import Logo from "@components/logo"
import { mixins } from "@styles/global"

const Footer = () => (
  <footer css={mixins.section}>
    <div css={mixins.wrapper}>
      
      <Logo />

      <div className="footer__text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati vitae consectetur.</p>

        <nav className="footer__nav">
          <NavLinks specialClass='footer__nav-list' />
        </nav>

      </div>

    </div>
  </footer>
)

export default Footer
