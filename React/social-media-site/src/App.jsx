import React from "react";
import { CssBaseline, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/PostFeed/PostFeed";
import Comments from "./components/CommentDetail/CommentDetails";

const App = () => {};

export default () => {
  return (
    <div>
      <Navbar />
      <Posts />
      <Comments />
    </div>
  );
};
