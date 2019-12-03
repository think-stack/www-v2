import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Container from '../components/uContentContainer'

export default function Nav ({ navActive }) {
  const data = useStaticQuery(graphql`
    query {
      allSanityPage(filter: {slug: {current: {regex: "/services|contact/"}}}) {
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
    }
  `)

const { allSanityPage, allSanityService } = data

  return (
    <StyledNav navActive={navActive}>
      <Container>
        <List>
          {allSanityPage.edges.map(item => {
            if (item.node.title.toLowerCase() === 'services') {
              return (
                <ListItem key={item.node.id}>
                  <MainLink activeStyle={{ pointerEvents: `none`}} to={`/${item.node.slug.current}`}>{item.node.title}</MainLink>
                  <SubList>
                  {
                    allSanityService.edges.map(item => {
                      return (
                        <ListItem>
                          <SubLink key={item.id} to={`/services/${item.node.slug.current}`}>{item.node.title}</SubLink>
                        </ListItem>
                      )
                    })
                  }
                  </SubList>
                </ListItem>
              )
            } else {
              return (
                  <ListItem key={item.node.id}>
                    <MainLink to={`/${item.node.slug.current}`}>{item.node.title}</MainLink>
                  </ListItem>
                )
            }
            })
          }
        </List>
      </Container>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  background-color: var(--darkGreen);
  height: 100%;
  left: 0;
  opacity: ${props => props.navActive ? `1` : `0`};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${props => props.navActive ? `1` : `-1`};
`

const List = styled.ul`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 10.5rem;
  text-align: right;
`

const ListItem = styled.li`
  margin-bottom: 0;
`

const MainLink = styled(Link)`
  color: var(--white);
  display: inline-block;
  font-size: 1.5625rem;
  font-family: var(--headingFont);
  font-weight: 700;
  line-height: 1.9375rem;
  margin-bottom: .6875rem;
  position: relative;
  text-align: right;
  text-decoration: none;
  text-transform: capitalize;

  &:after {
    background-color: var(--white);
    bottom: 0;
    content: '';
    height: 1px;
    right: 0;
    position: absolute;
    transition: width 400ms ease;
    width: 0;
  }

  &:hover {
    &:after {
      right: 0;
      width: 100%;
    }
  }
`

const SubList = styled(List)`
  margin-top: 0;
  margin-bottom: 2.625rem;
`

const SubLink = styled(MainLink)`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.25rem;
  text-align: right;
`
