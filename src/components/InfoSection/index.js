import React from "react"

import { InfoBlock, InfoInner } from "./styles"
import { AccentText, TextBlock, Flex, mixins } from "@globalStyles"

const InfoSection = ({ light, textLeft, accentText, title, body, image }) => (
  <InfoBlock light={light} css={mixins.section}>
    <InfoInner textLeft={textLeft}>
      <Flex>
        <img src={image} alt=""/>
      </Flex>

      <Flex>
        <AccentText>{accentText}</AccentText>

        <TextBlock>
          <h2>{title}</h2>
          <p>{body}</p>
        </TextBlock>
      </Flex>
    </InfoInner>
  </InfoBlock>
)

export default InfoSection
