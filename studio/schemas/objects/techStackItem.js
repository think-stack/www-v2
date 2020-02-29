export default {
  title: "Tech Stack Item",
  name: "techStackItem",
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
      title: "Image",
      name: "image",
      type: "image"
    }
  ]
};
