/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Nav from "../components/nav_static"
import Footer from "../components/footer"

import { ThemeProvider } from "@material-ui/styles"
import { createGlobalStyle } from "styled-components"
import { createMuiTheme } from "@material-ui/core/styles"

import * as fonts from "../fonts"
import "./layout.css"

const GlobalStyle = createGlobalStyle`

  :root {
    --black: #000;
    --white: #fff;
    --darkGreen: #244c5a;
    --green: #80b09c;
    --lightGreen: #dbe6df;
    --red: #b12029;
    --blue: #004877;
    --grey: #757575;
    --headingFont: 'TTSupermolot-Regular';
  }

  @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,400italic,600,700);

  @font-face {
    font-family: 'TTSupermolot-Regular';
    font-style: normal;
    font-weight: normal;
    src: local('TTSupermolot-Regular'),
         url('${fonts.TTSupermolotRegular}') format('opentype')
  }

  html {
    font-family: 'Open Sans', serif;
  }

  h1,
  h2,
  h3 {
    font-family: var(--headingFont);
  }

`

const TTSupermolot = {
  fontFamily: "TTSupermolot-Regular",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('TTSupermolot-Regular'),
    url(${fonts.TTSupermolotRegular}) format('opentype')
  `,
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#244c5a",
    },
    secondary: {
      light: "#dbe6df",
      main: "#80b09c",
      dark: "#244c5a",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    subtitle1: {
      fontFamily: "TTSupermolot-Regular",
      fontWeight: 700,
      fontSize: "1.6rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: "TTSupermolot-Regular",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.3,
      letterSpacing: "0.00938em",
    },
    button: {
      fontFamily: "TTSupermolot-Regular",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.3,
      letterSpacing: "0.00938em",
    },
  },
})

const Layout = ({ children, showFooter }) => {
  const [navActive, setNavActive] = useState(false)
  const toggle = () => setNavActive(!navActive)

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
    <ThemeProvider theme={theme}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        navActive={navActive}
        navToggle={toggle}
        position="fixed"
      />
      <Nav navActive={navActive} navToggle={toggle}></Nav>

      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      > */}
      <GlobalStyle />
      <main>{children}</main>
      {/* </div> */}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
