export default {
  title: 'Feature w/ Background Image',
  name: 'featuredBgImage',
  type: 'document',
  fields: [
    {
      title: 'Page',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'text',
    },
    // {
    //   title: 'List',
    //   name: 'list',
    //   type: 'array',
    //   of: [
    //     {
    //       title: 'List Item',
    //       name: 'listItem',
    //       type: 'string',
    //     },
    //   ],
    // },
    {
      title: 'List',
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'listItem',
        },
      ],
    },
    {
      title: 'Background Image',
      name: 'bgImage',
      type: 'image',
    },
    {
      title: 'Cta Text',
      name: 'ctaText',
      type: 'string',
    },
  ],
}
