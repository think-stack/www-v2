import React from "react"
import { graphql } from "gatsby"
import { Box, Container, Typography } from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import ReactHtmlParser from "react-html-parser"

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: "3rem",
    marginBottom: 50,
    color: "#254c5b",
  },
  body: {
    "& img": {
      display: "block",
      margin: "50px auto",
    },
    "& ul, & ol": {
      margin: 50,
    },
  },
}))

function Post({ data }) {
  const { post } = data
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Blog" />
      <Box my={30}>
        <Container>
          <Typography
            variant="title1"
            component="h1"
            className={classes.title}
            gutterBottom
          >
            {post.title}
          </Typography>
          <Box className={classes.body}>{ReactHtmlParser(post.body)}</Box>
        </Container>
      </Box>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query Post($id: String!) {
    post: hubspotPost(id: { eq: $id }) {
      author {
        name
        avatar
      }
      body
      meta {
        description
        title
      }
      title
      topics {
        id
        name
        slug
      }
      updated
      created
      id
    }
  }
`
