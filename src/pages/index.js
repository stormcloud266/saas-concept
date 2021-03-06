import React from "react"

import Layout from "@components/layout"
import SEO from "@components/seo"
import Hero from "@components/Hero"
import InfoSection from "@components/InfoSection"

import image2 from "@images/illustration-2.svg"
import image3 from "@images/illustration-3.svg"
import CardsContainer from "@components/CardsContainer"

const IndexPage = () => (
  <Layout>

    <SEO />

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
