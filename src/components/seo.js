import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({
  title = `Working with Styled Components and Gatsby`,
  description = `A simple Gatsby starter using styled components with dark/light modes.`,
  url = `https://big-ol-phone.netlify.app`,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/***********  twitter cards ***********/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={url + "/banner.png"} />

      {/***********  open graph ***********/}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={url + "/banner.png"} />
    </Helmet>
  )
}

export default Seo
