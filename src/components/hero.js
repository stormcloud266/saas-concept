import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {
  Button,
  AccentText,
  TextBlock,
  Flex,
  FlexContainer,
  mixins,
} from "@globalStyles"

import image from "@images/illustration-1.svg"

const Hero = () => (
  <StyledHero css={mixins.section}>
    <Flex>
      <AccentText>One Phone To Rule Them All</AccentText>
      <TextBlock>
        <h1>Unlock Your Potential with Our Massively Large Phones</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos et
          corrupti eius modi, fugit odio nulla ab culpa mollitia recusandae.
        </p>
        <Button as={Link} to="/">
          Get Yours Now
        </Button>
      </TextBlock>
    </Flex>

    <Flex>
      <img src={image} alt="" />
    </Flex>
  </StyledHero>
)

export default Hero

const StyledHero = styled(FlexContainer)`
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
