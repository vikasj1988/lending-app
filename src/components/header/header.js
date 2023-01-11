import { Insights } from "@mui/icons-material";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

import HeaderMenu from "./header-menu";

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Insights />
            <Typography variant="h4" component="div" sx={{ float: "left" }}>
              Insights
            </Typography>

            <HeaderMenu position="absolute" left="0" />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
