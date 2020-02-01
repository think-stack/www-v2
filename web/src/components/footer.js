import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Container from "../components/uContentContainer"
import McSignup from "../components/mcSignUp"
import Linkedin from "../components/icons/linkedin"
import Facebook from "../components/icons/facebook"
import Twitter from "../components/icons/twitter"
import logo from "../images/ts-monogram-green.svg"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      heading: sanityGlobals(title: { regex: "/footer/i" }) {
        heading
      }
    }
  `)

  return (
    <StyledFooter>
      <Container>
        <GridContainer>
          <FlexContainer>
            <div>
              <P>{data.heading.heading}</P>
              <MailLink href="mailto:sales@thinkstack.co">
                work with us
              </MailLink>
            </div>
          </FlexContainer>
          <SocialContainer>
            <Wrapper>
              <Logo src={logo} />
            </Wrapper>
            <SocialList>
              <SocialListItem>
                <SocialLink
                  href="https://www.linkedin.com/company/11195699/"
                  target="_blank"
                >
                  <Linkedin />
                </SocialLink>
              </SocialListItem>
              <SocialListItem>
                <SocialLink
                  href="https://www.facebook.com/thinkstacktech/"
                  target="_blank"
                >
                  <Facebook />
                </SocialLink>
              </SocialListItem>
              <SocialListItem>
                <SocialLink
                  href="https://twitter.com/thinkstacktech"
                  target="_blank"
                >
                  <Twitter />
                </SocialLink>
              </SocialListItem>
            </SocialList>
            <CopyRight>&copy; 2019 Think|Stack</CopyRight>
          </SocialContainer>
          <FlexContainer justify="end">
            <McSignup />
          </FlexContainer>
        </GridContainer>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: var(--darkGreen);
  color: var(--white);
  padding: 2rem 0;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20.375rem, 1fr));
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: ${props =>
    props.justify ? `flex-${props.justify}` : `flex-start`};

  @media screen and (max-width: 37.5rem) {
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    margin: 0 auto 2rem;
    max-width: 90%;
  }
`

const P = styled.p`
  margin: 0.5rem auto 0;
  max-width: 90%;

  @media screen and (min-width: 37.5rem) {
    margin: 0.5rem auto 0 0;
  }
`

const MailLink = styled.a`
  background-color: var(--green);
  border-radius: 2rem;
  color: var(--white);
  cursor: pointer;
  display: inline-block;
  font-family: var(--headingFont);
  font-size: 1rem;
  letter-spacing: 0.1em;
  line-height: 1.25rem;
  margin: 1rem 0;
  padding: 1rem 3rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 600ms ease, color 600ms ease;

  &:hover {
    background-color: var(--white);
    color: var(--darkGreen);
  }
`

const Wrapper = styled.figure`
  text-align: center;
`

const Logo = styled.img`
  width: 5rem;
`

const SocialContainer = styled.div`
  @media screen and (max-width: 600px) {
    order: 3;
  }
`

const SocialList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(100% / 3), 1fr));
  justify-items: center;
  list-style: none;
  margin: 0 auto 2rem;
  max-width: 80%;
`

const SocialListItem = styled.li`
  height: 2.5rem;
  margin-bottom: 0;
  width: 2.5rem;
`

const SocialLink = styled.a`
  align-items: center;
  border: 1px solid var(--white);
  border-radius: 2rem;
  color: var(--white);
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 0.5rem;
  width: 100%;

  svg {
    fill: currentColor;
    width: 2rem;
  }
`

const CopyRight = styled.p`
  color: var(--white);
  text-align: center;
`
