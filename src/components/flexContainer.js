import React from "react"
import styled from "styled-components"
import { mixins } from "@globalStyles"

const FlexContainer = ({ children, className, ...props }) => {
  return (
    <Container className={className} {...props}>
      {children}
    </Container>
  )
}

export default FlexContainer

const Container = styled.div`
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
