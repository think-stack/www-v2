import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import BlockContent from "@sanity/block-content-to-react"

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
          style={{
            backgroundImage: `url(${item.bgImage &&
              item.bgImage.asset.fluid.src})`,
          }}
        >
          <Container>
            <Box
              display="flex"
              justifyContent={index % 2 === 0 ? "flex-end" : "flex-start"}
            >
              <Box p={5} bgcolor="white" maxWidth={500}>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  className={classes.itemTitle}
                >
                  {item.title}
                </Typography>
                <BlockContent blocks={item.description} />
              </Box>
            </Box>
          </Container>
        </Box>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query SelfMadeQuery {
    hero: sanityPageHero(title: { regex: "/Self Made/i" }) {
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
    items: allSanitySelfMadeItem {
      nodes {
        id
        title
        description: _rawDescription(resolveReferences: { maxDepth: 10 })
        bgImage {
          asset {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
