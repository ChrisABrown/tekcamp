import React from "react";
import { CssBaseline, Grid } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/PostFeed/PostFeed";

export default function App() {
  return (
    <div>
      <CssBaseline>
        <Navbar />
        <Grid container spacing={3} style={{ width: "50%" }}>
          <Posts />
        </Grid>
      </CssBaseline>
    </div>
  );
}
