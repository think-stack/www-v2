/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions

  const result = await graphql(`
    {
      allSanityService {
        edges {
          node {
            id
            slug {
              current
            }
          }
          next {
            slug {
              current
            }
          }
        }
      }

      allSanityCaseStudy {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const serviceEdges = result.data.allSanityService.edges || []
  const caseStudies = result.data.allSanityCaseStudy.edges || []

  serviceEdges.forEach((edge, index) => {
    const path = `/services/${edge.node.slug.current}`

    const nextSlug = edge.next ? edge.next.slug.current : serviceEdges[0].node.slug.current

    createPage({
      path,
      component: require.resolve('./src/templates/serviceTemplate.js'),
      context: {
        slug: edge.node.slug.current,
        id: edge.node.id,
        nextSlug,
      }
    })
  })

  caseStudies.forEach((edge, index) => {
    const path = `/work/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve('./src/templates/caseStudyTemplate.js'),
      context: {
        slug: edge.node.slug.current,
        id: edge.node.id,
      }
    })
  })
}
