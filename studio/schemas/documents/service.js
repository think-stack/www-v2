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
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
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
    }
  ],
}
