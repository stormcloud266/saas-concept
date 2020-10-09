import styled from "styled-components"
import { FlexContainer, Flex } from "@globalStyles/flexContainer"

export const InfoBlock = styled.section`
  background-color: ${({ light }) => light ? 'var(--color-bg-secondary)' : 'var(--color-bg)'};
`

export const InfoInner = styled(FlexContainer)`

  ${Flex} {
    max-width: 56rem;
  }

  ${Flex}:first-child {
    order: ${({ textLeft }) => textLeft ? 2 : 1};
    margin-left: ${({ textLeft }) => textLeft ? '4rem' : 0};
  }

  ${Flex}:nth-child(2) {
    order: ${({ textLeft }) => textLeft ? 1 : 2};
    margin-left: ${({ textLeft }) => textLeft ? 0 : '4rem'};
  }

  @media only screen and (max-width: 56.25em) {

    ${Flex}:first-child, ${Flex}:nth-child(2) {
      margin-left: 0;
      order: unset;
    }
    ${Flex}:first-child {
      margin-bottom: 4rem;
    }
    
  }
`