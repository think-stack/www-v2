import React from "react"
import { graphql } from "gatsby"
import { Box, Container, Grid, Typography, Button } from "@material-ui/core"
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
  subscribeTitle: {
    fontSize: "2.5rem",
    lineHeight: 1.2,
    color: "#254c5b",
  },
  btn: {
    border: 0,
    display: "inline-block",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    borderRadius: "2rem",
    padding: "0.9rem 2rem 0.75rem",
    textTransform: "uppercase",
    fontFamily: "TTSupermolot-Regular",
    fontSize: "1rem",
    fontWeight: 900,
    lineHeight: "1.25rem",
    letterSpacing: "0.2em",
    transition: "background-color 600ms ease, color 600ms ease",
    marginTop: 18,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
      // backgroundColor: theme.palette.common.white,
      backgroundColor: theme.palette.primary.dark,
      // color: theme.palette.primary.dark,
    },
  },
}))

function Blog({ data }) {
  const { posts } = data.blog
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Blog" />
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
        <Box
          height={300}
          mt={20}
          maxWidth={600}
          mx="auto"
          p={10}
          textAlign="center"
        >
          <Typography
            variant="subtitle2"
            component="h3"
            gutterBottom
            className={classes.subscribeTitle}
          >
            Subscribe To Our Blog!
          </Typography>
          <Box mt={2}>
            <Button component={Link} className={classes.btn} to="#">
              Subscribe
            </Button>
          </Box>
        </Box>
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
