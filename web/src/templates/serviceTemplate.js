import React from 'react'
import { graphql } from 'gatsby'
import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link'
import posed from 'react-pose'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../components/layout'
import ServicesHero from '../components/servicesHero'
// TODO: add seo data
// import SEO from "../components/seo"
import ContentContainer from '../components/uContentContainer'
import PortableText from '../components/portableText/portableText'
import H2 from '../components/headings/h2'
import ContactCTA from '../components/contactCTA'

const transitionLength = 1.5

const exitTransition = {
  length: transitionLength, // Take 1.5 seconds to leave
  trigger: () => {
    if (document) {
      // Preventing overflow here make the animation smoother IMO
      document.body.style.overflow = 'hidden'
    }
  },
}

const entryTransition = {
  delay: transitionLength, // Wait 1.5 seconds before entering
  trigger: () => {
    if (document && window) {
      // Ensuring we're at the top of the page when the page loads
      // prevents any additional JANK when the transition ends.
      window.scrollTo(0, 0)
      document.body.style.overflow = 'visible'
    }
  },
}


export default function ServiceTemplate(props) {
  const {data: {service, nextPage}} = props

  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <Layout>
          <MainContent pose={transitionStatus}>
            <ServicesHero
              img={service.heroImage.asset.fluid}
              title={service.title}
              heading={service.pageSubHead}
              excerpt={service.pageExcerpt}
            />
            <ContentContainer>
              <GridContainer>
                <PortableText blocks={props.data.service._rawBundles} />
              </GridContainer>
            </ContentContainer>
            <ContentContainer>
              <H2 heading={service.serviceListTitle} color='var(--black)'></H2>
              <ListContainer>
                <PortableText blocks={props.data.service._rawInServices} />
              </ListContainer>
            </ContentContainer>
            <ContactCTA />
          </MainContent>
          <TransitionLink
            to={`/services/${nextPage.slug.current}`}
            exit={exitTransition}
            entry={entryTransition}
          >
            <SlidingHeader pose={transitionStatus}>
              <ServicesHero
                img={nextPage.heroImage.asset.fluid}
                title={nextPage.title}
                heading={nextPage.pageSubHead}
                excerpt={nextPage.pageExcerpt}
                transitionStatus={transitionStatus}
              />
            </SlidingHeader>
          </TransitionLink>
            {/* {errors && <SEO title='GraphQL Error' />} */}
            {/* {project && <SEO title={project.title || 'Untitled'} />} */}

            {/* {errors && ( */}
              {/* <ContentContainer> */}
                {/* <GraphQLErrorList errors={errors} /> */}
              {/* </ContentContainer> */}
            {/* )} */}

            {/* {project && <Project {...project} />} */}
        </Layout>
      )}
    </TransitionState>
  )
}

const MainContent = posed.div({
  exiting: { opacity: 0 },
})

const SlidingHeader = posed.div({
  exiting: {
    y: ({ element }) => {
      // This is an alternative API that allows us to dynamically generate a "y" value.

      // When scrolling back to the top, how far should we actually go? Let's factor the height of our site's header into the equation.
      // const navbar = document.querySelector('header')
      // const navbarDimensions = navbar.getBoundingClientRect()
      const distanceToTop =
        element.getBoundingClientRect().top

      // And return that aggregate distance as the dynamic "y" value.
      return distanceToTop * -1
    },
    transition: {
      ease: [0.59, 0.01, 0.28, 1], // Make the transition smoother
      delay: 250, // Let's wait a tick before starting
      duration: transitionLength * 1000 - 250, // And let's be sure not to exceed the 1.5s we have allotted for the entire animation.
    },
  },
})

// const HeroImg = styled(BackgroundImage) `
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   height: 20.6875rem;
// `

// const HeroHeading = styled.h1`
//   color: var(--white);
//   font-size: 48px;
//   line-height: 60px;
// `

// const SubHead = styled.div`
//   margin: 3.875rem auto 4.75rem;

//   p {
//     font-size: 1.25rem;
//     line-height: 170%;
//     margin-top: .5rem;
//     width: 38.125rem;
//   }
// `

const GridContainer = styled.div`
  margin-bottom: 5.3125rem;

  > div {
    border-radius: .25rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(31.25rem, 1fr));
    grid-column-gap: 1.25rem;
    grid-row-gap: 1.25rem;
  }
`

const ListContainer = styled.div`
  margin: 2rem 0;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 1rem;
  }

  li {
    flex: 1 1 auto;
    max-width: 50%;
  }
`

// const NextPageImage = styled(BackgroundImage)`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   height: 7.9375rem;
// `

// const NextPageHeading = styled.h2`
//   color: var(--white);
//   font-size: 3rem;
//   line-height: 3.75rem;
//   text-decoration: none;
// `

export const query = graphql`
  query ServiceTemplateQuery($id: String!, $nextSlug: String!) {
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
      _rawBundles(resolveReferences: {maxDepth: 15})
      serviceListTitle
      _rawInServices(resolveReferences: {maxDepth: 10})
    }
    nextPage: sanityService(slug: {current: {eq: $nextSlug}}) {
      title
      slug {
        current
      }
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
