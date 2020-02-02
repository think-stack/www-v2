export default {
  title: 'Campaign',
  name: 'campaign',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
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
      title: 'Short Title',
      name: 'shortTitle',
      type: 'string',
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'image',
    },
    {
      title: 'Hero Body',
      name: 'heroBody',
      type: 'text',
    },
    {
      title: 'Feature Title',
      name: 'featTitle',
      type: 'string',
    },
    {
      title: 'Featured Image',
      name: 'featImage',
      type: 'image',
    },
    {
      title: 'Form Heading',
      name: 'formHeading',
      type: 'string',
    },
    {
      title: 'Events',
      name: 'events',
      type: 'array',
      of: [
        {
          type: 'campaignEvent',
        },
      ]
    },
    {
      title: 'Contact',
      name: 'contact',
      type: 'array',
      of: [
        {
          type: 'campaignContact',
        },
      ]
    }
  ]
}
