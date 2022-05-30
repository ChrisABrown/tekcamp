import React from "react";
import { CssBaseline, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/PostFeed/PostFeed";
import APIkey from "./API/DummyAPI";
import CheckError from "./API/CheckError";

export default function App() {
  const [images, setImages] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPosts().catch(console.log);
  }, []);

  async function getPosts(posts) {
    const response = await fetch(
      "https://dummyapi.io/data/v1/post?page=1&limit=16",
      {
        headers: {
          "app-id": APIkey,
        },
      }
    );
    const data = await CheckError(response);
    setImages(data.data);
    setComments(data.data);
  }
  const imgData = images.map(({ image }) => image);
  const comData = comments.map(({ text }) => text);
  console.log(comData);
  return (
    <div>
      <CssBaseline>
        <Navbar />
        <Grid>
          <Posts key={imgData} src={imgData} owner="{ }" text={comData} />
        </Grid>
      </CssBaseline>
    </div>
  );
}
