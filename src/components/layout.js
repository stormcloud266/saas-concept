import React, { useContext } from "react"
import PropTypes from "prop-types"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import Header from "@components/Header"
import Footer from "@components/Footer"

import { GlobalStyle } from "@globalStyles"

const Layout = ({ children }) => {
  const themeContext = useContext(ThemeManagerContext)

  return (
    <>
      <GlobalStyle />
      <Header 
        isDark={themeContext.isDark} 
        themeContext={themeContext} 
      />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
