import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import useStyles from "./styles";

function Navbar(props) {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar classes={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          My Dashboard
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            My Feed
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
