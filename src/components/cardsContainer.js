import React from "react"
import styled from "styled-components"
import { mixins } from "@globalStyles"
import { Card } from "@components"
import { Anchor, Camera, Ghost } from "@images/icons"

const CardsContainer = () => {
  const data = [
    {
      icon: <Anchor />,
      title: `We sure`,
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus necessitatibus repellendus blanditiis hic ipsum excepturi fugit nobis.`,
    },
    {
      icon: <Camera />,
      title: `Love Gradients`,
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus necessitatibus repellendus blanditiis hic ipsum excepturi fugit nobis.`,
    },
    {
      icon: <Ghost />,
      title: `Don't We Folks`,
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus necessitatibus repellendus blanditiis hic ipsum excepturi fugit nobis.`,
    },
  ]

  return (
    <Features css={mixins.section}>
      <FeaturesInner css={mixins.wrapper}>
        {data.map(card => (
          <Card
            key={card.title}
            icon={card.icon}
            title={card.title}
            body={card.body}
          />
        ))}
      </FeaturesInner>
    </Features>
  )
}

export default CardsContainer

const Features = styled.div`
  background-image: linear-gradient(
    to right bottom,
    #de4771,
    #eb5064,
    #f55e56,
    #fa6d46,
    #fb7f36
  );
`

const FeaturesInner = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
    align-items: center;
  }
`
