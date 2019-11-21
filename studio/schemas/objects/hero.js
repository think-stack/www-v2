export default {
  title: 'Page Hero',
  name: 'pageHero',
  type: 'document',
  fields: [
    {
      title: 'Page Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Hero Title',
      name: 'heroTitle',
      type: 'string',
    },
    {
      title: 'Hero Body',
      name: 'body',
      type: 'text',
    },
    {
      title: 'Hero Image',
      name: 'bgImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
