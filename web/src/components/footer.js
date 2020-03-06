import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Grid, Box, Link } from "@material-ui/core"
import Linkedin from "../components/icons/linkedin"
import Facebook from "../components/icons/facebook"
import Twitter from "../components/icons/twitter"
import Instagram from "../components/icons/instagram"
// import logo from "../images/ts-monogram-green.svg"
import { makeStyles } from "@material-ui/core/styles"
import HubspotForm from "react-hubspot-form"

const useStyles = makeStyles(theme => ({
  main: {
    textAlign: "right",
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      marginLeft: 0,
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
    transition: "background-color 600ms ease, color 600ms ease",
    marginTop: 18,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.dark,
    },
  },
  form: {
    margin: 0,
    color: "white",
    maxWidth: 300,
    "& label": {
      display: "none",
    },
    "& input[type='email']": {
      backgroundColor: "transparent",
      border: 0,
      borderBottom: "2px #80b09c solid",
      width: "100%",
      color: "white",
      fontFamily: '"Open Sans", serif',
      fontSize: "1rem",
      outline: "none",
      borderRadius: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 50,
      marginBottom: 50,
    },
  },
  errors: {
    display: ["none", "!important"],
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
          <HubspotForm
            portalId="6503958"
            formId="f5d160c9-743b-4705-8ff8-ca20a5a7d7b3"
            onSubmit={() => console.log("Submit!")}
            onReady={form => console.log("Form ready!")}
            loading={<div></div>}
            cssClass={classes.form}
            submitButtonClass={classes.btn}
            errorMessageClass={classes.errors}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box textAlign="center" className={classes.socialWrapper}>
            <a
              href="https://www.linkedin.com/company/thinkstack/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialLink}
            >
              <Linkedin />
            </a>
            <a
              href="https://www.facebook.com/thinkstacktech/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialLink}
            >
              <Facebook />
            </a>
            <a
              href="https://twitter.com/thinkstacktech"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialLink}
            >
              <Twitter />
            </a>
            <a
              href="https://www.instagram.com/thinkstack/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialLink}
            >
              <Instagram />
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className={classes.main} maxWidth={400}>
            <Box color="white">{data.heading.heading}</Box>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:sales@thinkstack.co"
              className={classes.btn}
            >
              work with us
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
