export default {
  title: "Self Made Item",
  name: "selfMadeItem",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      title: "Background Image",
      name: "bgImage",
      type: "image"
    }
  ]
};
