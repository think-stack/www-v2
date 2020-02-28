import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  hero: {
    minHeight: 500,
    backgroundSize: "cover",
    backgroundPosition: "50%",
    color: theme.palette.common.white,
  },
}))

export default function SelfMadePage({ data }) {
  const { hero } = data
  const classes = useStyles()

  console.log(hero.bgImage.asset.fluid)

  return (
    <Layout>
      <SEO title="Tech Stack" />
      <Box
        display="flex"
        alignItems="flex-end"
        className={classes.hero}
        py={5}
        style={{
          backgroundImage: `url(${hero.bgImage.asset.fluid.src})`,
        }}
      >
        <Container>
          <Typography variant="h4" component="h1">
            {hero.heroTitle}
          </Typography>
          <Box maxWidth={600}>
            <Typography variant="body">{hero.body}</Typography>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query SelfMadeQuery {
    hero: sanityPageHero(title: { regex: "/Tech Stack/i" }) {
      heroTitle
      body
      bgImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid_noBase64
          }
        }
      }
    }
  }
`
