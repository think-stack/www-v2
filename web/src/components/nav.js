import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link, useStaticQuery, graphql } from "gatsby"
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
    backgroundColor: theme.palette.primary.main,
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

  const data = useStaticQuery(graphql`
    query {
      allSanityPage(
        filter: { slug: { current: { regex: "/about|contact|services/" } } }
      ) {
        edges {
          node {
            id
            slug {
              current
            }
            title
          }
        }
      }
      allSanityService {
        edges {
          node {
            id
            slug {
              current
            }
            title
          }
        }
      }
      sanityCampaign(id: { regex: "/e1ff7dbf-567b-5d8f-9a22-43fbadd0ca87/" }) {
        slug {
          current
        }
        id
        title
        shortTitle
      }
    }
  `)

  const { allSanityPage, allSanityService, sanityCampaign } = data

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
              {allSanityPage.edges.map(item => (
                <li key={item.node.id} className={classes.listItem}>
                  {item.node.title.toLowerCase() === "services" ? (
                    <>
                      <Link
                        activeStyle={{ pointerEvents: `none` }}
                        to={`/${item.node.slug.current}`}
                        className={classes.link}
                      >
                        <Typography variant="subtitle1" component="span">
                          {item.node.title}
                        </Typography>
                      </Link>
                      <ul className={classes.submenu}>
                        {allSanityService.edges.map(item => (
                          <li key={item.node.id}>
                            <Link
                              key={item.id}
                              to={`/services/${item.node.slug.current}`}
                              className={classes.link}
                            >
                              <Typography variant="subtitle2" component="span">
                                {item.node.title}
                              </Typography>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={`/${item.node.slug.current}`}
                      className={classes.link}
                    >
                      <Typography variant="subtitle1" component="span">
                        {item.node.title}
                      </Typography>
                    </Link>
                  )}
                </li>
              ))}
              <li key={sanityCampaign.id} className={classes.listItem}>
                <Link
                  to={`/${sanityCampaign.slug.current}`}
                  className={classes.link}
                >
                  <Typography variant="subtitle1" component="span">
                    {sanityCampaign.shortTitle}
                  </Typography>
                </Link>
              </li>
            </ul>
          </Container>
        </Box>
        <Footer />
      </Box>
    </Dialog>
  )
}

export default Nav
