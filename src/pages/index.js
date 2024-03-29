import React from "react"
import { Layout, Seo, Hero, InfoSection, CardsContainer } from "@components"
import image2 from "@images/illustration-2.svg"
import image3 from "@images/illustration-3.svg"

const IndexPage = () => (
  <Layout>
    <Seo />

    <Hero />

    <InfoSection
      light
      accentText={`It's a remarkable sight`}
      title={`Bury All Your Worries at Phonehenge`}
      body={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illo fugiat ab amet! Praesentium alias earum nisi est in temporibus, vel unde. Hic alias qui aspernatur consectetur similique nobis perspiciatis.`}
      image={image2}
    />

    <CardsContainer />

    <InfoSection
      textLeft
      accentText={`Abnormally High Definition`}
      title={`Let the Whole Town See Your Instagram Likes`}
      body={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illo fugiat ab amet! Praesentium alias earum nisi est in temporibus, vel unde. Hic alias qui aspernatur consectetur similique nobis perspiciatis.`}
      image={image3}
    />
  </Layout>
)

export default IndexPage
