import styled from "styled-components"
import { mixins } from "./mixins"

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mixins.wrapperSmOnTab};

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
    
    img {
      max-width: 36rem;
      max-height: 36rem;
      margin-left: auto;
      margin-right: auto;
      display: block;
    }
  }

`

export const Flex = styled.div`
  flex: 1;
  width: 100%;
`