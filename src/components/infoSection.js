import React from "react"
import styled from "styled-components"
import {
  AccentText,
  TextBlock,
  Flex,
  FlexContainer,
  mixins,
} from "@globalStyles"

const InfoSection = ({ light, textLeft, accentText, title, body, image }) => (
  <InfoBlock light={light} css={mixins.section}>
    <InfoInner textLeft={textLeft}>
      <Flex>
        <img src={image} alt="" />
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

const InfoBlock = styled.section`
  background-color: ${({ light }) =>
    light ? "var(--color-bg-secondary)" : "var(--color-bg)"};
`

const InfoInner = styled(FlexContainer)`
  ${Flex} {
    max-width: 56rem;
  }

  ${Flex}:first-child {
    order: ${({ textLeft }) => (textLeft ? 2 : 1)};
    margin-left: ${({ textLeft }) => (textLeft ? "4rem" : 0)};
  }

  ${Flex}:nth-child(2) {
    order: ${({ textLeft }) => (textLeft ? 1 : 2)};
    margin-left: ${({ textLeft }) => (textLeft ? 0 : "4rem")};
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
