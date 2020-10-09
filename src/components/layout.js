import React, { useState } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import Header from "@components/Header"
import Footer from "@components/Footer"

import { GlobalStyle } from "@globalStyles"

const Layout = ({ children }) => {

  const [isDark, toggleTheme] = useState(true);

  return (
    <>
    <ThemeProvider theme={{ mode: isDark ? 'dark' : 'light' }}>
      <GlobalStyle />

      <Header 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
      />

      <main>{children}</main>
      <Footer />
    </ThemeProvider>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
