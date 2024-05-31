import classes from "./directoryOrFile.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type ToggleExpandParams = {
  isDirectory: boolean;
  isExpanded: boolean;
};
const ToggleExpand = ({ isDirectory, isExpanded }: ToggleExpandParams) => {
  if (!isDirectory) {
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
