import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import {} from "react";

function Posts({ post }) {
  const [IsLoading, setLoading] = useState(true);
  const [likes, setLikes] = useState(0);
  const [text, setText] = useState(0);

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

  return (
    <Card>
      <div className="num-display">{each.likes}</div>
      <div>{each.text}</div>
      <button onClick={addLike}>Like</button>
      <button onClick={subtractLike}>Dislike</button>
    </Card>
  );
}

Posts.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Posts;

// import "../Post.css";
// import React from "react";

// const Post = (props) => {
//   return (
//     <div>
//       <img src={props.children} alt="" />
//       <small></small>
//     </div>
//   );
// };

// export default Post;

// setInterval(() => {
//   this.setState({ time: new Date().toLocaleTimeString() });
// }, 1000);
