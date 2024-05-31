import classes from "./directoryOrFile.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type ToggleExpandParams = {
  isDirectory: boolean;
  hasChildren: boolean;
  isExpanded: boolean;
};
const ToggleExpand = ({
  isDirectory,
  hasChildren,
  isExpanded,
}: ToggleExpandParams) => {
  if (!isDirectory || !hasChildren) {
    return null;
  }

  return (
    <button className={classes.toggleExpand}>
      {isExpanded ? (
        <ExpandMoreIcon fontSize="small" />
      ) : (
        <ChevronRightIcon fontSize="small" />
      )}
    </button>
  );
};

export default ToggleExpand;
