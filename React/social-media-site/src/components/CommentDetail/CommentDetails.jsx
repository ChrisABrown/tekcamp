import React from "react";
import "./styles.js";
import App from "../../App";

const Comment = (posts) => {
  return (
    <div>
      <div className="comment">
        <a href="/" className="avatar">
          <img src={posts.image} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {posts.owner}
          </a>
          <div className="metadata">
            <span className="date"></span>
          </div>
          <div className="text">{posts.text}</div>
        </div>
        <div className="ui-two-buttons">
          <button className="ui-button-1">Like</button>
          <button className="ui-button-2">Dislike</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
