import {
  AppBar,
  Drawer,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";

import InsightsIcon from "@mui/icons-material/Insights";
import { Box, Container } from "@mui/system";
import { CheckBox, ExpandMore } from "@mui/icons-material";

import SettingsIcon from "@mui/icons-material/Settings";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

import { useState } from "react";

const drawerWidth = 250;

const HeaderComponent = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <InsightsIcon />
            Insights
          </Typography>

          <MenuItem color="inherit" variant="subtitle1" component="div">
            Industry
          </MenuItem>
          <MenuItem color="inherit" variant="subtitle1" component="div">
            Sales
          </MenuItem>
          <MenuItem color="inherit" variant="subtitle1" component="div">
            Operations
          </MenuItem>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem disablePadding>
              <ListItemText>Filters </ListItemText>
              <SettingsIcon />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText>Date Range</ListItemText>
              <CreateOutlinedIcon />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText>Geographic Region </ListItemText>
              <CreateOutlinedIcon />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText>Exclude Loan Status </ListItemText>
              {/* <ThemeProvider theme={theme}>
                <CustomCheckBox defaultChecked />
              </ThemeProvider> */}
            </ListItem>

            <FormControlLabel
              control={<CheckBox />}
              label="Application withdraw"
            ></FormControlLabel>
            <FormControlLabel
              control={<CheckBox />}
              label="File Closed for incompletness"
            ></FormControlLabel>
            {/* <CheckBoxOutlineBlankRoundedIcon /> */}
            <ListItem disablePadding>
              <ListItemText>Loan Purpose</ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText>Loan Type</ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText>Loan Amount</ListItemText>
              <CheckBox />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#f8f8ff", height: "101vh" }} />
      </Container>
    </>
  );
};
export default HeaderComponent;
