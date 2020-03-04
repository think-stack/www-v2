import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Container, Typography } from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import ReactHtmlParser from "react-html-parser"
import { format } from "date-fns"

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "TTSupermolot-Regular",
    fontSize: "3rem",
    fontWeight: 700,
    marginBottom: 50,
    color: "#254c5b",
  },
  body: {
    "& h1, & h2, & h3": {
      color: "#254c5b",
    },
    "& img": {
      display: "block",
      margin: "50px auto",
      maxWidth: "100%",
    },
    "& ul, & ol": {
      margin: 50,
    },
  },
  avatar: {
    width: 80,
    height: 80,
    marginRight: 30,
    marginBottom: 0,
    borderRadius: "50%",
    objectFit: "cover",
  },
  btn: {
    border: 0,
    display: "inline-block",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: "2rem",
    padding: "0.75rem 2rem",
    textTransform: "uppercase",
    fontFamily: "TTSupermolot-Regular",
    fontSize: "0.75rem",
    fontWeight: 900,
    lineHeight: "1.25rem",
    letterSpacing: "0.2em",
  },
  topic: {
    border: 0,
    display: "inline-block",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: "2rem",
    padding: "0.4rem 1rem",
    fontFamily: "TTSupermolot-Regular",
    fontSize: "0.75rem",
    fontWeight: 900,
    lineHeight: "1.25rem",
    letterSpacing: "0.2em",
    marginLeft: 5,
  },
  author: {
    color: theme.palette.primary.dark,
  },
}))

function Post({ data }) {
  const { post } = data
  const classes = useStyles()

  return (
    <Layout>
      <SEO title={post.meta.title} description={post.meta.description} />
      <Box mt={30}>
        <Container>
          <Typography variant="h1" className={classes.title} gutterBottom>
            {post.title}
          </Typography>
          <Box
            mb={5}
            display="flex"
            alignItems="center"
            className={classes.author}
          >
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className={classes.avatar}
            />
            <Box>
              <strong>
                <Link
                  to={`/blog/authors/${post.author.slug}`}
                  key={post.author.id}
                  className={classes.author}
                >
                  {post.author.name}
                </Link>
              </strong>
              <br />
              <small>{format(post.created, "LLL dd, yyyy")}</small>
            </Box>
          </Box>
          <Box className={classes.body}>{ReactHtmlParser(post.body)}</Box>
          <Box mt={5}>
            <strong>Topics:</strong>
            {post.topics.map(topic => (
              <Link
                className={classes.topic}
                to={`/blog/topics/${topic.slug}`}
                key={topic.id}
              >
                {topic.name}
              </Link>
            ))}
          </Box>
        </Container>
      </Box>
      <Box my={15} textAlign="center">
        <Link className={classes.btn} to={`/blog`}>
          Back
        </Link>
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
        slug
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
