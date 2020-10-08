import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({
  title = `Working with Styled Components and Gatsby`,
  description = `This is a description`,
  url = `https://big-ol-phone.netlify.app`
}) => {

  const data = useStaticQuery(graphql`
    query BannerImage {
      file(name: {eq: "banner"}) {
        publicURL
      }
    }
  `)

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/***********  twitter cards ***********/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={url + data.file.publicURL} />

      {/***********  open graph ***********/}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={url + data.file.publicURL} />
    </Helmet>
  )
}

export default SEO
