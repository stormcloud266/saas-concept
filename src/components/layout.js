import React from "react"
import PropTypes from "prop-types"

import Header from "@components/Header"
import Footer from "@components/Footer"

import { GlobalStyle } from "@globalStyles"

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
