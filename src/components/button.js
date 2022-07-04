import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { mixins } from "@globalStyles"

const Button = ({ children, to, className, ...props }) => {
  return to ? (
    <StyledLink to={to} className={className} {...props}>
      {children}
    </StyledLink>
  ) : (
    <StyledButton className={className} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button

const StyledLink = styled(Link)`
  ${mixins.button}
`

const StyledButton = styled.button`
  ${mixins.button}
`
