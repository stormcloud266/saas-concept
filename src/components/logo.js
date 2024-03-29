import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Logo = () => (
  <StyledLogo to="/">
    <svg
      className="prefix__icon prefix__icon-tabler prefix__icon-tabler-square-rotated"
      width={30}
      height={30}
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="#de4771"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M10.5 20.4l-6.9-6.9c-.781-.781-.781-2.219 0-3l6.9-6.9c.781-.781 2.219-.781 3 0l6.9 6.9c.781.781.781 2.219 0 3l-6.9 6.9c-.781.781-2.219.781-3 0z" />
    </svg>
    Big Ol' Phones
  </StyledLogo>
)

export default Logo

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: var(--color-text-headers);
  font-weight: 500;
  position: relative;
  z-index: 999;
  svg {
    margin-right: 1.6rem;
  }
`
