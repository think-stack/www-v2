export default {
  title: 'Service',
  name: 'service',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      title: 'Body',
      name: 'body',
      type: 'text',
    },
    {
      title: 'Page Sub Heading',
      name: 'pageSubHead',
      type: 'string',
    },
    {
      title: 'Page Excerpt',
      name: 'pageExcerpt',
      type: 'text',
    },
    {
      title: 'Solution Bundles',
      name: 'bundles',
      type: 'array',
      of: [
        {
          type: 'featuredSolution'
        }
      ],
    },
    {
      title: 'Service List Title',
      name: 'serviceListTitle',
      type: 'string',
    },
    {
      title: 'Individual Services',
      name: 'inServices',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      title: 'Partner Logos',
      name: 'partnerLogo',
      type: 'array',
      of: [
        {
          type: 'partner'
        }
      ]
    },
  ],
}
