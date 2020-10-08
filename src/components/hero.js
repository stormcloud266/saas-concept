import React from "react"
import { Link } from "gatsby"

import { StyledHero } from "@styles/sections"
import { Button, AccentText, Text } from "@styles/elements"
import image from "@images/illustration-1.svg"

const Hero = () => (
  <StyledHero>
    <div>
      <AccentText>Big Boi</AccentText>

      <Text>
        <h1>Unlock Your Potential with a Massively Large Phone</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos et corrupti eius modi, fugit odio nulla ab culpa mollitia recusandae.</p>
        <Button as={Link} to="/">Get Yours Now</Button>
      </Text>
      
    </div>

    <div>
      <img src={image} alt=""/>
    </div>
  </StyledHero>
)

export default Hero
