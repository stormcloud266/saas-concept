import React from "react"
import Logo from "@components/Logo"
import { mixins } from "@globalStyles"
import { Link}  from 'gatsby'

const Footer = () => (
  <footer css={mixins.section}>
    <div css={mixins.wrapper}>
      
      <Logo />

      <div className="footer__text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati vitae consectetur.</p>

        <nav className="footer__nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/examples">Examples</Link>
          </li>
          <li>
            <Link to="/">Page</Link>
          </li>
          <li>
            <Link to="/">Page</Link>
          </li>
          <li>
            <Link to="/">Page</Link>
          </li>
        </ul>
        </nav>

      </div>

    </div>
  </footer>
)

export default Footer
