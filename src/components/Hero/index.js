import React from "react"
import { Link } from "gatsby"

import { StyledHero } from "./styles"
import { Button, AccentText, TextBlock, Flex, mixins } from "@globalStyles"

import image from "@images/illustration-1.svg"

const Hero = () => (
  <StyledHero css={mixins.section}>

    <Flex>
      <AccentText>Big Boi</AccentText>
      <TextBlock>
        <h1>Unlock Your Potential with Our Massively Large Phones</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos et corrupti eius modi, fugit odio nulla ab culpa mollitia recusandae.</p>
        <Button as={Link} to="/">Get Yours Now</Button>
      </TextBlock>
    </Flex>

    <Flex>
      <img src={image} alt=""/>
    </Flex>

  </StyledHero>
)

export default Hero
