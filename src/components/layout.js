import React, { useState, useEffect, useContext } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import storage from "local-storage-fallback"

import Header from "@components/Header"
import Footer from "@components/Footer"

import { GlobalStyle } from "@globalStyles"

// const getInitialTheme = () => {
//   const savedTheme = storage.getItem('isDark')
//   return savedTheme ? JSON.parse(savedTheme) : true
// }

const Layout = ({ children }) => {
  const themeContext = useContext(ThemeManagerContext)

  // const [isDark, toggleTheme] = useState(getInitialTheme)

  // useEffect(() => {
  //   storage.setItem('isDark', isDark)
  // }, [isDark])

  return (
    <>
    {/* <ThemeProvider> */}
      <GlobalStyle />

      <Header 
        isDark={themeContext.isDark} 
        themeContext={themeContext} 
      />

{console.log(themeContext)}

      <main>{children}</main>
      <Footer />
    {/* </ThemeProvider> */}
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
