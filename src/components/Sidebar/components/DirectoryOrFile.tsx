import React, { useState } from "react";
import classes from "./directoryOrFile.module.css";
import { renderDirectories } from "../Sidebar";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DescriptionIcon from "@mui/icons-material/Description";
type Props = { directory: Directory };

const DirectoryOrFile = ({ directory }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = !!directory.children;
  return (
    <>
      <div
        className={`${classes.directoryOrFile} ${
          directory.type === "file" ? classes.file : classes.directory
        }`}
        {...(hasChildren
          ? { onClick: () => setIsExpanded((prev) => !prev) }
          : {})}
      >
        {hasChildren ? (
          <button className={classes.toggleExpand}>
            {isExpanded ? (
              <ExpandMoreIcon fontSize="small" />
            ) : (
              <ChevronRightIcon fontSize="small" />
            )}
          </button>
        ) : (
          ""
        )}
        <div className={classes.icon}>
          {directory.type === "folder" ? (
            isExpanded ? (
              <FolderOpenIcon fontSize="small" />
            ) : (
              <FolderIcon fontSize="small" />
            )
          ) : (
            <DescriptionIcon fontSize="small" />
          )}
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
