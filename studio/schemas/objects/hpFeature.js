export default {
  title: 'HP Feature',
  name: 'hpFeature',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Feature Body',
      name: 'featBody',
      type: 'text'
    },
    {
      title: 'Feature Link',
      name: 'link',
      type: 'string',
    },
    {
      title: 'External Link',
      name: 'extLink',
      description: 'Does this link to an external site?',
      type: 'boolean',
      // type: 'array',
      // of: [{ type: 'string' }],
      // options: {
      //   list: [
      //     {
      //       title: 'Yes',
      //       value: 'true',
      //     },
      //   ]
      // }
    },
  ],
}
