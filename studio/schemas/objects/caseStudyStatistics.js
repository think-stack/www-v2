export default {
  title: 'Statistics',
  name: 'caseStudyStats',
  type: 'object',
  fields: [
    {
      title: 'Statistic Group',
      name: 'statisticGroup',
      type: 'string',
    },
    {
      title: 'Background Image',
      name: 'bgImage',
      type: 'image',
    },
    {
      title: 'Stats',
      name: 'stats',
      type: 'array',
      of: [
        {
          type: 'statistic',
        }
      ]
    }
  ]
}
