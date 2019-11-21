export default {
  title: 'Homepage Feature Section',
  name: 'features',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Features',
      name: 'features',
      type: 'array',
      of: [
        {
          type: 'hpFeature'
        },
      ],
    },
  ],
}
