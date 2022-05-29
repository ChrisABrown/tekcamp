import React from "react";
import { useState, useEffect } from "react";
import Card from "../../shared/Card";
import PropTypes from "prop-types";
import APIkey from "../../API/DummyAPI";
import CheckError from "../../API/CheckError";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dummyapi.io/data/v1/post?page=1&limit=16", {
      headers: {
        "app-id": APIkey,
      },
    })
      .then(CheckError)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        return <h1>Excuse the Mess!</h1>;
      });
  }, []);

  if (isLoading === true) {
    return <h1>Wait for it...</h1>;
  }

  return (
    <div>
      <img id="posts" src="" alt="post goes here" />
      <img src="" alt="post goes here" />
      <img src="{}" alt="post goes here" />
      <img src="{}" alt="post goes here" />
      <img src="{}" alt="post goes here" />
      <img src="{}" alt="post goes here" />
      <img src="{}" alt="post goes here" />
      <img src="{}" alt="post goes here" />
      <img src="{}" alt="post goes here" />
      <img src="{}" alt="post goes here" />
      <img src="{}" alt="post goes here" />
      <img src="{}" alt="post goes here" />
      <img src="{}" alt="post goes here" />
      <img src="{}" alt="post goes here" />
      <img src="{}" alt="post goes here" />
    </div>
  );
}

export default Posts;
