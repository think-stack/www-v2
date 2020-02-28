export default {
  title: "Tech Stack Page",
  name: "techStackPage",
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
      title: "Tech Stack Items",
      name: "techStackItems",
      type: "array",
      of: [{ type: "reference", to: [{ type: "techStackItem" }] }],
      validation: Rule => Rule.unique()
    }
  ]
};
