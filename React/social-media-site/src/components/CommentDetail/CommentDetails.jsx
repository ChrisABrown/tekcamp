import React from "react";
import { useState } from "react";
import "./styles.js";
import ThumbUp from "@mui/icons-material/ThumbUp";
import ThumbDown from "@mui/icons-material/ThumbDown";
import CheckError from "../../API/CheckError.js";
import APIkey from "../../API/DummyAPI.js";

export default function Comment({ user }) {
  const [comment, setComments] = useState([]);
  async function getComments() {
    const res = await fetch("https://dummyapi.io/data/v1/comment", {
      methods: "GET",
      headers: {
        "app-id": APIkey,
      },
    });
    const comm = await CheckError(res);
    setComments(comm.data);
    console.log(comment);
  }
  {
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
}
