export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: The site needs to be re-deployed to see the changes you made in the content.",
              sites: [
                {
                  buildHookId: "5dd71b4d9982684c29bd96d1",
                  title: "Website",
                  name: "thinkstack-web",
                  apiId: "1b626524-27c5-48cb-a8f9-ef52e8883c87"
                }
              ]
            }
          }
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/think-stack/www-v2",
            category: "Code"
          },
          {
            title: "Frontend",
            value: "https://www.thinkstack.co/",
            category: "apps"
          }
        ]
      }
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Most Recent Updates",
        order: "_createdAt desc",
        types: [
          "campaign",
          "campaignContact",
          "campaignEvent",
          "caseStudy",
          "caseStudyFeature",
          "caseStudyStatistic",
          "caseStudyQuote",
          "caseStudyWideGraphic",
          "collideProduct",
          "featuredBgImage",
          "featuredSolution",
          "fullWidthCta",
          "fullWidthEditorial",
          "globals",
          "hero",
          "hpFeature",
          "hpFeaturesSection",
          "listItem",
          "modalCta",
          "page",
          "partner",
          "service",
          "serviceList",
          "standardCta",
          "statistic",
          "team",
          "values",
          "selfMadePage",
          "techStackPage",
          "selfMadeItem",
          "techStackItem"
        ]
      },
      layout: { width: "medium" }
    }
  ]
};
