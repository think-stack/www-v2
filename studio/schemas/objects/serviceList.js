export default {
  title: 'Individual Service List',
  name: 'indServList',
  type: 'object',
  fields: [
    {
      title: 'Asa Service',
      name: 'asaServ',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }
  ]

}
