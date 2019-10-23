import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        alignItems: `center`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        minHeight: `100vh`,
      }}
    >
      <h1>Pages</h1>
      <Link
        style={{
          color: `var(--grey)`,
          fontSize: `2.5rem`,
          textTransform: `capitalize`,
        }}
        to='/services'>
          services index
      </Link>
    </div>
  </Layout>
)

export default IndexPage
