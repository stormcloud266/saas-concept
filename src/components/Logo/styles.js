import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: white;
  font-weight: 500;
  position: relative;
  z-index: 999;
  svg {
    margin-right: 1.6rem;
  }
`