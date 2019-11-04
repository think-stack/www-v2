import { Link, useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from "prop-types"
import React from "react"
import Hamburger from '../components/hamburger'
import Logo from '../components/logo'

const Header = ({ siteTitle, navActive, navToggle }) => {

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
    <StyledHeader bgColor={navActive}>
      <Container>
        <Link to="/">
          {/* {siteTitle} */}
          {/* <StyledImg fluid={data.logoColor.childImageSharp.fluid} /> */}
          <Logo navActive={navActive} />
        </Link>
        <Hamburger navToggle={navToggle} navActive={navActive} bgColor={navActive} />
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: ${props => props.bgColor ? `var(--grey)` : `var(--white)`};
  height: 8.75rem;
  position: fixed;
  z-index: 2;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  left: 50%;
  max-width: 90rem;
  position: fixed;
  transform: translateX(-50%);
  width: 100%;
`

const StyledImg = styled(Img)`
  width: 18.1875rem;
  margin: 2.125rem 0 2.8125rem 1.9375rem;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
