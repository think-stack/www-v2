export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    {
      title: 'Page Title',
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
  ],
}
