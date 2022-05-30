import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import APIkey from "../../API/DummyAPI";
import CheckError from "../../API/CheckError";
import Comment from "../CommentDetail/CommentDetails";
import Card from "../../shared/Card";
import { Grid } from "@mui/material";
import "./styles.css";

export default function Posts() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

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
  console.log(userData);
  return (
    <>
      <Grid>
        <Card className="ui card">
          {post.map(({ image, text, likes }) => {
            return (
              <figure className="ui content">
                <Card>
                  {userData.map(({ firstName, lastName, picture }) => {
                    if (userData.id === post.id)
                      return (
                        <Stack>
                          <Avatar
                            key={userData.id}
                            alt={firstName + lastName}
                            src={picture}
                          />
                          <p>{firstName + " " + lastName}</p>
                        </Stack>
                      );
                  })}
                </Card>
                <img key={post.id} src={image} alt={text} />
                <Card className="text card">
                  <small>Likes:{likes} </small>
                  <figcaption></figcaption>
                </Card>
              </figure>
            );
          })}
        </Card>
      </Grid>
    </>
  );
}
