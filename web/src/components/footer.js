import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Grid, Box, Button, Link } from "@material-ui/core"
import Linkedin from "../components/icons/linkedin"
import Facebook from "../components/icons/facebook"
import Twitter from "../components/icons/twitter"
import Instagram from "../components/icons/instagram"
// import logo from "../images/ts-monogram-green.svg"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  main: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginBottom: 50,
    },
  },
  socialWrapper: {
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      width: 50,
      left: 10,
      top: 140,
    },
  },
  socialLink: {
    display: "inline-flex",
    width: "3rem",
    height: "3rem",
    border: "2px solid white",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 10px",
    "& svg": {
      fill: theme.palette.common.white,
      width: "1.3rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 15,
    },
  },
  btn: {
    display: "inline-block",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    borderRadius: "2rem",
    padding: "1rem 3rem",
    textTransform: "uppercase",
    lineHeight: "1.25rem",
    letterSpacing: "0.1em",
    transition: "background-color 600ms ease, color 600ms ease",
    marginTop: 18,
    "&:hover": {
      textDecoration: "none",
      backgroundColor: theme.palette.common.white,
      color: theme.palette.secondary.dark,
    },
  },
  formWrapper: {
    "& label": {
      color: theme.palette.common.white,
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginBottom: 50,
    },
  },
}))

export default function Footer() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      heading: sanityGlobals(title: { regex: "/footer/i" }) {
        heading
      }
    }
  `)

  return (
    <Container>
      <Grid container spacing={0} alignItems="flex-end">
        <Grid item xs={12} md={4}>
          <Box className={classes.main}>
            <Box color="white">{data.heading.heading}</Box>
            <Link
              target="_blank"
              href="mailto:sales@thinkstack.co"
              className={classes.btn}
            >
              work with us
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box textAlign="center" className={classes.socialWrapper}>
            <a
              href="https://www.linkedin.com/company/thinkstack/"
              target="_blank"
              className={classes.socialLink}
            >
              <Linkedin />
            </a>
            <a
              href="https://www.facebook.com/thinkstacktech/"
              target="_blank"
              className={classes.socialLink}
            >
              <Facebook />
            </a>
            <a
              href="https://twitter.com/thinkstacktech"
              target="_blank"
              className={classes.socialLink}
            >
              <Twitter />
            </a>
            <a
              href="https://www.instagram.com/thinkstack/"
              target="_blank"
              className={classes.socialLink}
            >
              <Instagram />
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className={classes.formWrapper}>
            <iframe
              src="/form.html"
              frameBorder="0"
              style={{ margin: 0, width: "100%", height: "96px" }}
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
