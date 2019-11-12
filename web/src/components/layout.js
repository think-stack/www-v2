/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

import { createGlobalStyle } from 'styled-components'
import * as fonts from '../fonts'

import "./layout.css"

const GlobalStyle = createGlobalStyle`

  :root {
    --black: #000;
    --white: #fff;
    --grey: #244c5a;
    --green: #80b09c;
    --lightGreen: #dbe6df;
    --red: #b12029;
    --blue: #004877;
    --headingFont: 'TTSupermolot-Regular';
  }

  @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700);

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

const Layout = ({ children, showFooter }) => {

  const [navActive, setNavActive ] = useState(false)
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
    <>
      <Header siteTitle={data.site.siteMetadata.title} navActive={navActive} navToggle={toggle} />
      <Nav navActive={navActive}></Nav>

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
      {
        showFooter && <Footer />
      }
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
