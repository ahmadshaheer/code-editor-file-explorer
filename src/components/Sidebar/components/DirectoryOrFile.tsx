import React, { useState } from "react";
import classes from "./directoryOrFile.module.css";
import { renderDirectories } from "../Sidebar";
import ToggleExpand from "./ToggleExpand";
import Icon from "./Icon";

type Props = { directory: Directory };

const DirectoryOrFile = ({ directory }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = !!directory.children;
  const isDirectory = directory.type === "folder";

  const handleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <>
      <div
        className={`${classes.directoryOrFile} ${
          !isDirectory ? classes.file : classes.directory
        }`}
        {...(isDirectory ? { onClick: handleExpand } : {})}
      >
        <ToggleExpand isDirectory={isDirectory} isExpanded={isExpanded} />

        <div className={classes.icon}>
          <Icon isDirectory={isDirectory} isExpanded={isExpanded} />
        </div>

        <div className={classes.title}>{directory.title}</div>
      </div>
      {hasChildren && isExpanded && (
        <div className={classes.child}>
          {renderDirectories(directory.children!)}
        </div>
      )}
    </>
  );
};

export default DirectoryOrFile;
