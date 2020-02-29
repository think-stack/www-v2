import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import BlockContent from "@sanity/block-content-to-react"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  hero: {
    minHeight: 500,
    backgroundSize: "cover",
    backgroundPosition: "50%",
    color: theme.palette.common.white,
  },
  item: {
    backgroundSize: "cover",
    backgroundPosition: "50%",
    "& p:last-child": {
      margin: 0,
    },
  },
}))

export default function SelfMadePage({ data }) {
  const { hero, items } = data
  const classes = useStyles()

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
      {items.edges.map((item, index) => (
        <Box key={item.id} py={10} className={classes.item}>
          <Container>
            <Img fluid={item.node.image.asset.fluid} />
            <Box
              display="flex"
              justifyContent={index % 2 === 0 ? "flex-end" : "flex-start"}
            >
              <Box p={5} bgcolor="white" maxWidth={500}>
                <BlockContent blocks={item.node.description} />
              </Box>
            </Box>
          </Container>
        </Box>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query TechStackQuery {
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
    items: allSanityTechStackItem {
      edges {
        node {
          id
          title
          description: _rawDescription(resolveReferences: { maxDepth: 10 })
          image {
            asset {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`
