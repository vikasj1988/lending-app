import { Accordion, AccordionSummary, Drawer, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const drawerWidth = 250;

const FilterComponent = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              marginTop: 8,
            },
          }}
        >
          <Accordion>
            <AccordionSummary expandIcon={<SettingsIcon />}>
              <Typography fontSize="150%" fontWeight="bold">
                Filters
              </Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary>Data Range</AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
              Loan Purpose
            </AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
              Loan Type
            </AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
              Loan Amount
            </AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
              Customer Age
            </AccordionSummary>
          </Accordion>
        </Drawer>
      </Box>
    </>
  );
};
export default FilterComponent;
