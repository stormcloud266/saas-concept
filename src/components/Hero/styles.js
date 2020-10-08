import styled from "styled-components"
import { FlexContainer, Flex } from "@globalStyles/flexContainer"

export const StyledHero = styled(FlexContainer)`
  min-height: 100vh;
  padding-top: 5rem;

  @media only screen and (max-width: 56.25em) {
    ${Flex}:nth-child(1) {
      order: 2;
      margin-top: 4rem;
    }

    img {
      max-width: 24rem;
    }
  }
`