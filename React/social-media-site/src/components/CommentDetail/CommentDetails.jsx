import React from "react";
import "./styles.js";
import ThumbUp from "@mui/icons-material/ThumbUp";
import ThumbDown from "@mui/icons-material/ThumbDown";

export default function Comment({ user }) {
  return (
    <div>
      <div className="comment">
        <a href="/" className="avatar">
          <img key={user} src={user} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            ""
          </a>
          <div className="metadata">
            <span className="date"></span>
          </div>
          <div className="text"></div>
        </div>
        <div className="ui-two-buttons">
          <button>
            <ThumbUp />
          </button>
          <button>
            <ThumbDown />
          </button>
        </div>
      </div>
    </div>
  );
}
