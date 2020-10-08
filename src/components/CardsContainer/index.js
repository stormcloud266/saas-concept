import React from "react"
import { Features, FeaturesInner } from "./styles"
import { mixins } from "@globalStyles"
import Card from "@components/Card"
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
    }
  ]

  return (
    <Features css={mixins.section}>
      <FeaturesInner css={mixins.wrapper}>
        {
          data.map(card => (
            <Card
              key={card.title}
              icon={card.icon}
              title={card.title}
              body={card.body}
            />
          ))
        }
      </FeaturesInner>
    </Features>
  )
}

export default CardsContainer
