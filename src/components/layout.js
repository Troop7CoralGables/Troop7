/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Menu from "./menu"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = data.site.siteMetadata?.title || `Title`;

  return (
    <div className="expanding-container">
      <Header siteTitle={title} />
      <Menu />
      <div
        style={{
          margin: `0 16%`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
        className="container-item row"
      >
        <main style={{
          flexGrow: 1,
        }}>{children}</main>
      </div>
      <Footer siteTitle={title} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
