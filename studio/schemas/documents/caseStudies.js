export default {
  title: 'Case Study',
  name: 'caseStudy',
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
      title: 'Hero',
      name: 'hero',
      type: 'text',
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'image',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'caseStudyFeature',
        },
        {
          type: 'quote',
        },
        {
          type: 'caseStudyStats',
        },
        {
          type: 'wideGraphic',
        },
      ]
    }
  ],
}
