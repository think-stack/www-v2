import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../components/layout'
import SEO from "../components/seo"
import ContentContainer from '../components/uContentContainer'
import H2 from '../components/headings/h2'


export default function ServiceTemplate(props) {
  const { data: {service}, errors } = props
  // const heroImg =
  // const project = data && data.project
  return (
    <Layout>
      <HeroImg fluid={service.heroImage.asset.fluid}>
        <ContentContainer>
          <HeroHeading>{service.title}</HeroHeading>
        </ContentContainer>
      </HeroImg>
      <ContentContainer>
        <SubHead>
          <H2 heading={service.pageSubHead} color='var(--black)'></H2>
          <p>{service.pageExcerpt}</p>
        </SubHead>
      </ContentContainer>
      {errors && <SEO title='GraphQL Error' />}
      {/* {project && <SEO title={project.title || 'Untitled'} />} */}

      {errors && (
        <ContentContainer>
          {/* <GraphQLErrorList errors={errors} /> */}
        </ContentContainer>
      )}

      {/* {project && <Project {...project} />} */}
    </Layout>
  )
}

const HeroImg = styled(BackgroundImage) `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 20.6875rem;
`

const HeroHeading = styled.h1`
  color: var(--white);
  font-size: 48px;
  line-height: 60px;
`

const SubHead = styled.div`
  margin-top: 3.875rem;

  p {
    font-size: 1.25rem;
    line-height: 170%;
    margin-top: .5rem;
    width: 38.125rem;
  }
`

export const query = graphql`
  query ServiceTemplateQuery($id: String!) {
    service: sanityService(id: {eq: $id}) {
      title
      heroImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid_noBase64
          }
        }
      }
      pageSubHead
      pageExcerpt
    }
  }
`
