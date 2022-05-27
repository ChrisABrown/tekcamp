import React from "react";
import "../Comments.css";

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
        <div className="ui-two-buttons">
          <button className="ui-button-1">Like</button>
          <button className="ui-button-2">Dislike</button>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default Comment;
