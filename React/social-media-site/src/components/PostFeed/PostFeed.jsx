import React from "react";
import Comment from "../CommentDetail/CommentDetails";
import Card from "@mui/material/Card/";
import "./styles.css";

export default function Posts(props) {
  return (
    <Card className="ui card">
      <figure className="ui content">
        <img id="posts" src={props.src[0]} alt="post goes here" />

        <figcaption>{props.text[0]}</figcaption>
        <Comment />
      </figure>
    </Card>
  );
}
