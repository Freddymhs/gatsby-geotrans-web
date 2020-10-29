/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./ComponentesSecciones/HEADER/Header"
import Headertop from "../components/ComponentesSecciones/HEADER/Headertop"
import Footegeotrans from "../components/ComponentesSecciones/FOOTER/footegeotrans"
import "./layout.css" // hoja estilo global
import { CartContext } from "../context/CartContext"
import Helmet from "react-helmet"

const Layout = ({ children }) => {
  // const { languages, changeLanguage } = useI18next()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <CartContext.Consumer>
        {cart => (
          <main style={{ backgroundColor: "#f8f8ff" }}>
            <Headertop />
            <Header />
            <div
              style={{ backgroundColor: "#FF6E40", paddingTop: "3px" }}
            ></div>

            {children}

            <Footegeotrans />
          </main>
        )}
      </CartContext.Consumer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
