import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Button = ({ children, to, className }) => {
  return (
    <StyledButton to={to} className={className}>
      {children}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled(Link)`
  background-color: var(--color-pink);
  color: #fff;
  padding: 1.4rem 4rem;
  border-radius: 6rem;
  display: inline-block;
  box-shadow: 0 3px 25px rgba(222, 71, 113, 0.5);
  transition: all 0.2s;

  :hover {
    transform: translateY(-1px);
    background-color: #c3385f;
  }
`
