import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import Header from "./header"
import Footer from "../components/footer"
import { Dialog, Box, Container, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  dialog: {
    "& .MuiDialog-paper": {
      // backgroundColor: "transparent",
    },
  },
  root: {
    position: "fixed",
    backgroundColor: theme.palette.primary.dark,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "auto",
    zIndex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 50,
  },
  list: {
    textAlign: "right",
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  listItem: {
    marign: 0,
  },
  link: {
    position: "relative",
    display: "inline-block",
    color: theme.palette.common.white,
    "&::after": {
      display: "block",
      content: '""',
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 0,
      height: 1,
      backgroundColor: theme.palette.common.white,
      transition: "width 400ms ease",
    },
    "&:hover": {
      "&::after": {
        right: 0,
        width: "100%",
      },
    },
  },
  submenu: {
    margin: "10px 0 30px 0",
    padding: 0,
    listStyle: "none",
  },
}))

function Nav({ navActive, navToggle }) {
  const classes = useStyles()

  const services = [
    {
      label: "Cybersecurity",
      path: "/services/cybersecurity",
    },
    {
      label: "Infrastructure",
      path: "/services/infrastructure",
    },
    {
      label: "Cloud Management",
      path: "/services/cloud-management",
    },
    {
      label: "Consulting",
      path: "/services/education",
    },
    {
      label: "Emergency Response",
      path: "/services/incident-and-disaster-response",
    },
  ]

  const pages = [
    {
      label: "Who We Are",
      path: "/about",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Contact",
      path: "/contact",
    },
    {
      label: "AWS Case Studies",
      path: "/awsnpocu",
    },
  ]

  return (
    <Dialog fullScreen open={navActive} className={classes.dialog}>
      <Box className={classes.root}>
        <Box mb={5}>
          <Header
            navActive={navActive}
            navToggle={navToggle}
            position="static"
          />
          <Container>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link
                  activeStyle={{ pointerEvents: `none` }}
                  to="/services"
                  className={classes.link}
                >
                  <Typography variant="subtitle1" component="span">
                    Services
                  </Typography>
                </Link>
                <ul className={classes.submenu}>
                  {services.map(service => (
                    <li key={service.label}>
                      <Link to={service.path} className={classes.link}>
                        <Typography variant="subtitle2" component="span">
                          {service.label}
                        </Typography>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {pages.map(page => (
                <li key={page.label} className={classes.listItem}>
                  {page.path.indexOf("http") !== -1 ? (
                    <a href={page.path} className={classes.link}>
                      <Typography variant="subtitle1" component="span">
                        {page.label}
                      </Typography>
                    </a>
                  ) : (
                    <Link to={page.path} className={classes.link}>
                      <Typography variant="subtitle1" component="span">
                        {page.label}
                      </Typography>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </Container>
        </Box>
        <Footer />
      </Box>
    </Dialog>
  )
}

export default Nav
