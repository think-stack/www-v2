export default {
  title: "Team Members",
  name: "teamMembers",
  type: "document",
  fields: [
    {
      title: "Member",
      name: "member",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "team" }]
        }
      ]
    }
  ]
};
