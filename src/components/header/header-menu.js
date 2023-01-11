import { MenuItem } from "@mui/material";

const HeaderMenu = () => {
  return (
    <>
      <MenuItem
        color="inherit"
        variant="subtitle1"
        component="div"
        position="left"
      >
        Industry
      </MenuItem>
      <MenuItem color="inherit" variant="subtitle1" component="div">
        Sales
      </MenuItem>
      <MenuItem color="inherit" variant="subtitle1" component="div">
        Operations
      </MenuItem>
    </>
  );
};

export default HeaderMenu;
