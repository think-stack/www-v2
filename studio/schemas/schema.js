// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import campaign from "./documents/campaigns";
import caseStudy from "./documents/caseStudies";
import collideProduct from "./documents/collideProduct";
import featuredBgImage from "./documents/featuredBgImage";
import globals from "./documents/globals";
import hpFeaturesSection from "./documents/hpFeaturesSection";
import modalCta from "./documents/modalCta";
import page from "./documents/page";
import partner from "./documents/partner";
import service from "./documents/service";
import standardCta from "./documents/standardCta";
import team from "./documents/team";
import teamMembers from "./documents/teamMembers";
import values from "./documents/values";
import selfMadePage from "./documents/selfMadePage";
import techStackPage from "./documents/techStackPage";
import blog from "./documents/blog";

// import img from './objects/img'
import campaignContact from "./objects/campaignContact";
import campaignEvent from "./objects/campaignEvent";
import caseStudyFeature from "./objects/caseStudyFeature";
import caseStudyStatistic from "./objects/caseStudyStatistics";
import caseStudyQuote from "./objects/caseStudyQuote";
import caseStudyWideGraphic from "./objects/caseStudyWideGraphic";
import hero from "./objects/hero";
import hpFeature from "./objects/hpFeature";
import fullWidthCta from "./objects/fullWidthCta";
import fullWidthEditorial from "./objects/fullWidthEditorial";
import featuredSolution from "./objects/featuredSolution";
import listItem from "./objects/listItem";
import serviceList from "./objects/serviceList";
import statistic from "./objects/statistic";
import selfMadeItem from "./objects/selfMadeItem";
import techStackItem from "./objects/techStackItem";

// Then we give our schema to the builder and provide the result to Sanity
// TODO: add validation to docs and objs
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    blog,
    campaign,
    campaignContact,
    campaignEvent,
    caseStudy,
    caseStudyFeature,
    caseStudyStatistic,
    caseStudyQuote,
    caseStudyWideGraphic,
    collideProduct,
    featuredBgImage,
    featuredSolution,
    fullWidthCta,
    fullWidthEditorial,
    globals,
    hero,
    hpFeature,
    hpFeaturesSection,
    listItem,
    modalCta,
    page,
    partner,
    service,
    serviceList,
    standardCta,
    statistic,
    team,
    teamMembers,
    values,
    selfMadePage,
    techStackPage,
    selfMadeItem,
    techStackItem
    // img,
  ])
});
