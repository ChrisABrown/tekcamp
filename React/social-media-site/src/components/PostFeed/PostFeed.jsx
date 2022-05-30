import * as React from "react";
import { Avatar, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { getComments } from "../CommentDetail/CommentDetails";
import APIkey from "../../API/DummyAPI";
import CheckError from "../../API/CheckError";
import Comment from "../CommentDetail/CommentDetails";
import Card from "../../shared/Card";
import { Grid } from "@mui/material";
import "./styles.css";

export default function Posts(props) {
  const [post, setPost] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getPosts().then(setIsLoaded(true));
    if (isLoaded === true) return;
  });

  async function getPosts() {
    const response = await fetch(
      "https://dummyapi.io/data/v1/post?page=1&limit=16",
      {
        methods: "GET",
        headers: {
          "app-id": APIkey,
        },
      }
    );
    const data = await CheckError(response);
    setPost(data.data);
  }

  const userData = post.map(({ owner }) => owner);

  const users = userData.map(({ firstName, lastName, picture }) => {
    if (userData.id === post.id)
      return (
        <Stack>
          <Avatar key={userData.id} alt={firstName + lastName} src={picture} />
          <p key={userData.id}>{firstName + " " + lastName}</p>
        </Stack>
      );
  });

  return (
    <>
      <Grid>
        <Card className="ui card">
          {post.map(({ image, text, likes }) => {
            return (
              <figure className="ui content">
                <img key={post.id} src={image} alt={text} />
                <Card key={userData.id}>{users}</Card>
                <Card className="text card">
                  <small>Likes:{likes} </small>
                  <Comment />
                </Card>
              </figure>
            );
          })}
        </Card>
      </Grid>
    </>
  );
}
