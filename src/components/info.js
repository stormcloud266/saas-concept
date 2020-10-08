import React from "react"

import { TextBlock, TextInner } from "@styles/sections"
import { AccentText, Text } from "@styles/elements"

const InfoBlock = ({ light, textLeft, accentText, title, body, image }) => (
  <TextBlock light={light}>
    <TextInner textLeft={textLeft}>
      <div>
        <img src={image} alt=""/>
      </div>

      <div>
        <AccentText>{accentText}</AccentText>

        <Text>
          <h2>{title}</h2>
          <p>{body}</p>
        </Text>
      </div>
    </TextInner>
  </TextBlock>
)

export default InfoBlock
