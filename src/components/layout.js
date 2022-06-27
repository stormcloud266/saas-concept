import React from "react"
import PropTypes from "prop-types"
import { useStyledDarkMode } from "gatsby-styled-components-dark-mode"
import { Footer, Header } from "@components"
import { GlobalStyle } from "@globalStyles"

const Layout = ({ children }) => {
  const { isDark, toggleDark } = useStyledDarkMode()

  return (
    <>
      <GlobalStyle />
      <Header isDark={!!isDark} toggleDark={toggleDark} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
