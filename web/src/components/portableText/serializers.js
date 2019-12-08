// import { Styled } from 'theme-ui';
// import BlockRenderer from './block-renderer';
// import Figure from './figure';
import React from 'react'
import FeaturedSolution from '../featuredSolution'
import CaseStudyFeature from '../caseStudyFeature'
import CaseStudyStats from '../caseStudyStats'
import CaseStudyWideGraphic from '../caseStudyWideGraphic'
import Services from '../services'
import Quote from '../caseStudyQuote'

export default {
  // marks: {
  //   code: Styled.code,
  // },
  types: {
    // if you want to change headings, etc., you have to edit this component
    // block: BlockRenderer,
    // 'page-image': Figure,
    // 'featuredSolution': ({ node }) => <pre>{JSON.stringify(node, null, 2)}</pre>,
    'caseStudyFeature': CaseStudyFeature,
    'featuredSolution': FeaturedSolution,
    'caseStudyStats': CaseStudyStats,
    'wideGraphic': CaseStudyWideGraphic,
    'quote': Quote,
    // 'caseStudyFeature': ({node}) => <pre>{JSON.stringify(node, null, 2)}</pre>
    // 'test': ({node}) => <pre>{JSON.stringify(node, null, 2)}</pre>,
    // 'serviceList': Services,
    // list: Services,
  },
  // For a full list of magic types that don’t go in the `types` object,
  // see: https://github.com/sanity-io/block-content-to-react#proptypes
  // list: Styled.ul,
  // listItem: Styled.li,
};
