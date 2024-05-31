import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import DescriptionIcon from "@mui/icons-material/Description";

type IconProps = {
  isDirectory: boolean;
  isExpanded: boolean;
};
const Icon = ({ isDirectory, isExpanded }: IconProps) => {
  if (isDirectory) {
    if (isExpanded) {
      return <FolderOpenIcon fontSize="small" />;
    }
    return <FolderIcon fontSize="small" />;
  }
  return <DescriptionIcon fontSize="small" />;
};

export default Icon;
