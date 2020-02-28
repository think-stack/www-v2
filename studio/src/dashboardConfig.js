export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "",
                  title: "Think|Stack Studio",
                  name: "thinkstack-studio",
                  apiId: ""
                },
                {
                  buildHookId: "",
                  title: "Website",
                  name: "thinkstack-web",
                  apiId: ""
                }
              ]
            }
          }
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/think-stack/www-v2",
            category: "Code"
          },
          {
            title: "Frontend",
            value: "https://www.thinkstack.co/",
            category: "apps"
          }
        ]
      }
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"]
      },
      layout: { width: "medium" }
    }
  ]
};
