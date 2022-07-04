import React from "react"
import styled from "styled-components"
import { AccentText, TextBlock, FlexContainer } from "@components"
import { mixins } from "@globalStyles"

const InfoSection = ({ light, textLeft, accentText, title, body, image }) => (
  <InfoBlock light={light} css={mixins.section}>
    <InfoInner textLeft={textLeft}>
      <FlexItem>
        <img src={image} alt="" />
      </FlexItem>

      <FlexItem>
        <AccentText>{accentText}</AccentText>

        <TextBlock>
          <h2>{title}</h2>
          <p>{body}</p>
        </TextBlock>
      </FlexItem>
    </InfoInner>
  </InfoBlock>
)

export default InfoSection

const InfoBlock = styled.section`
  background-color: ${({ light }) =>
    light ? "var(--color-bg-secondary)" : "var(--color-bg)"};
`

const FlexItem = styled.div`
  flex: 1;
  width: 100%;
`

const InfoInner = styled(FlexContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mixins.wrapperSmOnTab};

  ${FlexItem} {
    max-width: 56rem;
  }

  ${FlexItem}:first-of-type {
    order: ${({ textLeft }) => (textLeft ? 2 : 1)};
    margin-left: ${({ textLeft }) => (textLeft ? "4rem" : 0)};
  }

  ${FlexItem}:nth-of-type(2) {
    order: ${({ textLeft }) => (textLeft ? 1 : 2)};
    margin-left: ${({ textLeft }) => (textLeft ? 0 : "4rem")};
  }

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;

    ${FlexItem}:first-child, ${FlexItem}:nth-child(2) {
      margin-left: 0;
      order: unset;
    }
    ${FlexItem}:first-child {
      margin-bottom: 4rem;
    }

    img {
      max-width: 36rem;
      max-height: 36rem;
      margin-left: auto;
      margin-right: auto;
      display: block;
    }
  }
`
