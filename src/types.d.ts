type Directory = {
  title: string;
  type: "folder" | "file";
  children?: Directory[];
};
