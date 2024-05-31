import React from "react";
import classes from "./sidebar.module.css";
import DirectoryOrFile from "./components/DirectoryOrFile";

type Props = { directories: Directory[] };

function Sidebar({ directories }: Props) {
  return (
    <div className={classes.sidebar}>{renderDirectories(directories)}</div>
  );
}

//   Recursive function to render directories
export const renderDirectories = (directoriesList: Directory[]) => {
  return directoriesList.map((directory: Directory, index) => {
    return (
      <DirectoryOrFile
        directory={directory}
        key={`${directory.title}-${index}`}
      />
    );
  });
};

export default Sidebar;
