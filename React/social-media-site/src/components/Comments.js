import React from "react";

const Comment = (props) => {
  return (
    <div>
      <div className="comment">
        <a href="/" className="avatar">
          <img src={props.imgSrc} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">{props.timeAgo}</span>
          </div>
          <div className="text">{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
