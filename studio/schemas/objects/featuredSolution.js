export default {
  title: 'Featured Solution',
  name: 'featuredSolution',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Services',
      name: 'services',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
