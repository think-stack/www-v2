import React from "react"
import { graphql } from "gatsby"
import { Box, Container, Grid, Typography } from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
// import SanitizedHTML from "react-sanitized-html"
// import TextTruncate from "react-text-truncate"
import ArrowIcon from "../images/link-arrow.svg"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  img: {
    width: "100%",
    height: 250,
    objectFit: "cover",
  },
  title: {
    lineHeight: 1.2,
    color: "#254c5b",
  },
  moreLink: {
    fontWeight: 700,
    lineHeight: "150%",
    position: "relative",
    color: "#254c5b",
    "&::after": {
      content: "''",
      display: "block",
      height: "0.75rem",
      left: "105%",
      position: "absolute",
      top: "55%",
      transform: "translateY(-50%)",
      width: "1rem",
      backgroundImage: `url(${ArrowIcon})`,
      backgroundRepeat: "no-repeat",
    },
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
              <Grid item xs={12} md={6} lg={4}>
                <Box mt={3}>
                  <img
                    src={post.feature_image.url}
                    alt={post.feature_image.alt_text}
                    className={classes.img}
                  />
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    className={classes.title}
                    gutterBottom
                  >
                    {post.title}
                  </Typography>
                  {post.meta.description}
                  <Box mt={2}>
                    <Link
                      className={classes.moreLink}
                      to={`/blog/${post.slug}`}
                    >
                      Read More
                    </Link>
                  </Box>
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
