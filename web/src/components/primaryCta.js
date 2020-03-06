import React from "react"
import { Link } from "gatsby"
import { Container, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
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
  },
  heading: {
    color: theme.palette.primary.dark,
    fontSize: 39,
    fontWeight: 400,
    lineHeight: "48px",
    marginBottom: "0.75rem",
    textAlign: "center",
    textTransform: "capitalize",
  },
}))

export default function Cta({ content: { heading, body, cta, link } }) {
  const classes = useStyles()
  // when using this component without a link
  // check if prop has cta text
  const hasLink = cta === undefined ? false : true

  return (
    <Container>
      <Box margin="4.875rem auto 4.5rem" maxWidth={550} textAlign="center">
        <h2 className={classes.heading}>{heading}</h2>
        <Box lineHeight={1.5}>{body}</Box>
        {hasLink && (
          <Link to={link} className={classes.btn}>
            {cta}
          </Link>
        )}
      </Box>
    </Container>
  )
}
