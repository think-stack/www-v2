export default {
  title: "Self Made Page",
  name: "selfMadePage",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      title: "Hero Section",
      name: "heroSection",
      type: "pageHero"
    },
    {
      title: "Self Made Items",
      name: "selfMadeItems",
      type: "array",
      of: [{ type: "reference", to: [{ type: "selfMadeItem" }] }],
      validation: Rule => Rule.unique()
    }
  ]
};
