import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import storage from "local-storage-fallback"

import Header from "@components/Header"
import Footer from "@components/Footer"

import { GlobalStyle } from "@globalStyles"

const getInitialTheme = () => {
  const savedTheme = storage.getItem('isDark')
  return savedTheme ? JSON.parse(savedTheme) : true
}

const Layout = ({ children }) => {

  const [isDark, toggleTheme] = useState(getInitialTheme)

  useEffect(() => {
    storage.setItem('isDark', isDark)
  }, [isDark])

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
