import React from "react"
import { Link } from "gatsby"

import { Button } from '@styles/elements'

import Layout from "@components/layout"
import SEO from "@components/seo"
import Hero from "@components/hero"
import InfoBlock from "@components/info"
import Cards from "@components/cards"

import image2 from "@images/illustration-2.svg"
import image3 from "@images/illustration-3.svg"

const IndexPage = () => (
  <Layout>

    <SEO title="Home" />

    <Hero />

    <InfoBlock 
      light
      accentText={`It's a remarkable sight`}
      title={`Bury All Your Worries at Phonehenge`}
      body={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illo fugiat ab amet! Praesentium alias earum nisi est in temporibus, vel unde. Hic alias qui aspernatur consectetur similique nobis perspiciatis.`}
      image={image3}
    />

    <Cards />

    <InfoBlock 
      textLeft
      accentText={`High definition selfies`}
      title={`Use It As a Full Size Floor Mirror`}
      body={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illo fugiat ab amet! Praesentium alias earum nisi est in temporibus, vel unde. Hic alias qui aspernatur consectetur similique nobis perspiciatis.`}
      image={image2}
    />

  </Layout>
)

export default IndexPage
