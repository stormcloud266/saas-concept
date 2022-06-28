import React from "react"
import styled from "styled-components"
import { AccentText, Button, FlexContainer, TextBlock } from "@components"
import { mixins } from "@globalStyles"

import image from "@images/illustration-1.svg"

const Hero = () => (
  <StyledHero css={mixins.section}>
    <FlexItem>
      <AccentText>One Phone To Rule Them All</AccentText>
      <TextBlock>
        <h1>Unlock Your Potential with Our Massively Large Phones</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos et
          corrupti eius modi, fugit odio nulla ab culpa mollitia recusandae.
        </p>
        <Button to="/">Get Yours Now</Button>
      </TextBlock>
    </FlexItem>

    <FlexItem>
      <img src={image} alt="" />
    </FlexItem>
  </StyledHero>
)

export default Hero

const FlexItem = styled.div`
  flex: 1;
  width: 100%;
`

const StyledHero = styled(FlexContainer)`
  min-height: 100vh;
  padding-top: 5rem;

  @media only screen and (max-width: 56.25em) {
    ${FlexItem} {
      order: 2;
      margin-top: 4rem;
    }

    img {
      max-width: 24rem;
    }
  }
`
