import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Container, Typography, Grid } from "@material-ui/core"
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
  heroTitle: {
    fontSize: "2.5rem",
  },
  item: {
    backgroundSize: "cover",
    backgroundPosition: "50%",
    "& p:last-child": {
      margin: 0,
    },
  },
  itemTitle: {
    fontSize: "2rem",
    color: "#244b5a",
    fontWeight: 400,
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
          backgroundImage: `url(${hero.bgImage &&
            hero.bgImage.asset.fluid.src})`,
        }}
      >
        <Container>
          <Typography
            variant="subtitle1"
            component="h1"
            className={classes.heroTitle}
          >
            {hero.heroTitle}
          </Typography>
          <Box maxWidth={600}>
            <Typography variant="body1">{hero.body}</Typography>
          </Box>
        </Container>
      </Box>
      {items.nodes.map((item, index) => (
        <Box
          key={item.id}
          py={10}
          className={classes.item}
          bgcolor={index % 2 === 0 ? "" : "#EEE"}
        >
          <Container>
            <Grid
              container
              direction={index % 2 === 0 ? "row-reverse" : "row"}
              justify="space-between"
            >
              <Grid item lg={5}>
                <Box py={5} textAlign={index % 2 === 0 ? "right" : ""}>
                  <Typography
                    variant="subtitle1"
                    component="h2"
                    className={classes.itemTitle}
                  >
                    {item.title}
                  </Typography>
                  <BlockContent blocks={item.description} />
                </Box>
              </Grid>
              <Grid item lg={5}>
                <Box
                  display="flex"
                  maxWidth={500}
                  justifyContent={index % 2 === 0 ? "flex-end" : ""}
                >
                  {item.image && (
                    <Img
                      fluid={item.image.asset.fluid}
                      style={{
                        alignSelf: `center`,
                        justifySelf: `center`,
                        width: 200,
                      }}
                    />
                  )}
                </Box>
              </Grid>
            </Grid>
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
      nodes {
        id
        title
        description: _rawDescription(resolveReferences: { maxDepth: 10 })
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid_noBase64
            }
          }
        }
      }
    }
  }
`
