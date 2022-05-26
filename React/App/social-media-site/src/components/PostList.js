import React, { useState } from "react";
import DummyAPI from "../api/DummyAPI";
import Post from "./Post";

const PostList = (props) => {
  const [post, setPost] = useState();

  return (
    <>
      <div className="ui three column grid">
        <div className="column">
          <div className="ui segment">
            <Post />
            {/* <Post />
            <Post />
            <Post />
            <Post /> */}
          </div>
        </div>
        <div className="column">
          <div className="ui segment">
            <Post />
            {/* <Post />
            <Post />
            <Post />
            <Post /> */}
          </div>
        </div>
        <div className="column">
          <div className="ui segment">
            <Post />
            {/* <Post />
            <Post />
            <Post />
            <Post /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;
