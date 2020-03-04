import React from "react"
import { graphql } from "gatsby"
import { Box, Container, Grid, Typography } from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import SanitizedHTML from "react-sanitized-html"
import TextTruncate from "react-text-truncate"

const useStyles = makeStyles(theme => ({
  img: {
    width: "100%",
    height: 300,
    objectFit: "cover",
  },
}))

function Blog({ data }) {
  const { posts } = data.blog
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Blog" />
      <Box>{/* <pre>{JSON.stringify(data, null, 4)}</pre> */}</Box>
      <Box my={20}>
        <Container>
          <Grid container spacing={5}>
            {posts.map(post => (
              <Grid item xs={12} lg={4}>
                <Box>
                  <img
                    src={post.feature_image.url}
                    alt={post.feature_image.alt_text}
                    className={classes.img}
                  />
                  <Typography variant="subtitle1" component="h3">
                    {post.title}
                  </Typography>
                  <TextTruncate
                    line={3}
                    element="div"
                    truncateText="…"
                    text={post.meta.description}
                    textTruncateChild={<a href="#">Read on</a>}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  {
    blog: allHubspotPost {
      totalCount
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        itemCount
        pageCount
        perPage
      }
      posts: nodes {
        title
        meta {
          title
          description
        }
        topics {
          description
          id
          name
          slug
        }
        published
        slug
        summary
        state
        created
        author {
          avatar
          bio
          email
          facebook
          full_name
          id
          linkedin
          name
          slug
          twitter
          twitter_username
          website
        }
        feature_image {
          url
          alt_text
        }
        updated
        url
      }
    }
  }
`

export default Blog
