import React from "react";
import { useState } from "react";
import Card from "../../shared/Card";
import PropTypes from "prop-types";

const Posts = (props) => {
  const [IsLoading, setLoading] = useState(true);
  const [likes, setLikes] = useState();
  const [text, setText] = useState();

  const addLike = () => {
    setLikes((prev) => {
      return prev + 1;
    });
  };
  const subtractLike = () => {
    setLikes((prev) => {
      return prev - 1;
    });
  };

  // const handleClick = () => {};

  // {
  //   each.likes;
  // }{ content from API pull set data to each
  //   each.text;
  // }

  return <div></div>;
};

export default Posts;

// export default Post;

// setInterval(() => {
//   this.setState({ time: new Date().toLocaleTimeString() });
// }, 1000);
