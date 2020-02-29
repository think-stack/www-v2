import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
// import Img from "gatsby-image"
import debounce from "../lib/debounce"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Hamburger from "../components/hamburger"
import Logo from "../components/logo"
import { Container, Box } from "@material-ui/core"

const Header = ({ siteTitle, navActive, navToggle, position }) => {
  const [scrolled, setScrolled] = useState(false)

  const debouncedFn = debounce(function() {
    if (window.scrollY > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }, 10)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", debouncedFn)
  }

  // const data = useStaticQuery(graphql`
  //   query {
  //     logoColor: file(relativePath: { eq: "logo-full-color.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }

  //     placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <StyledHeader
      navActive={navActive}
      isScrolled={scrolled}
      position={position}
      className="mui-fixed"
    >
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link to="/">
            {/* {siteTitle} */}
            {/* <StyledImg fluid={data.logoColor.childImageSharp.fluid} /> */}
            <Logo navActive={navActive} />
          </Link>
          <Hamburger
            navToggle={navToggle}
            navActive={navActive}
            bgColor={navActive}
          />
        </Box>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: ${props =>
    !props.navActive && props.isScrolled ? `var(--white)` : `transparent`};
  height: 8.75rem;
  position: ${props => props.position || "fixed"};
  transition: background-color 600ms ease;
  z-index: 2;
  left: 0;
  right: 0;
  align-items: center;
  display: flex;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
