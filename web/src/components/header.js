import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import debounce from "../lib/debounce"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Hamburger from "../components/hamburger"
import Logo from "../components/logo"

const Header = ({ siteTitle, navActive, navToggle }) => {
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

  const data = useStaticQuery(graphql`
    query {
      logoColor: file(relativePath: { eq: "logo-full-color.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledHeader navActive={navActive} isScrolled={scrolled}>
      <Container>
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
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: ${props =>
    !props.navActive && props.isScrolled ? `var(--white)` : `transparent`};
  height: 8.75rem;
  position: fixed;
  transition: background-color 600ms ease;
  z-index: 2;
  width: 100%;
  align-items: center;
  display: flex;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 50%;
  max-width: 1240px;
  position: fixed;
  transform: translateX(-50%);
  width: 100%;
  @media screen and (max-width: 1240px) {
    padding-right: 10px;
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
