import React from "react"
import PropTypes from "prop-types"

import Header from "@components/header"
import Footer from "@components/footer"

import { GlobalStyle } from "@styles/global"

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
