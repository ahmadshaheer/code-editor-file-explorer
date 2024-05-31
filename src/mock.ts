export const directories: Directory[] = [
  {
    title: "src",
    type: "folder",
    children: [
      { title: "App.css", type: "file" },
      { title: "components", type: "folder" },
    ],
  },
  {
    title: "node_modules",
    type: "folder",
    children: [{ title: "package1", type: "folder", children: [] }],
  },
  { title: "package.json", type: "file" },
  {
    title: "public",
    type: "folder",
    children: [
      {
        title: "assets",
        type: "folder",
        children: [
          {
            title: "images",
            type: "folder",
            children: [{ title: "assets", type: "file" }],
          },
        ],
      },
    ],
  },
];
