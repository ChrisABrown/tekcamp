import React from "react";
import PropTypes from "prop-types";

PostFeed.propType = {
  resp: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      likes: PropTypes.isRequired,
    })
  ),
};

export default function PostFeed({ resp }) {
  // if (!resp || resp.length === 0)
  // {
  //   return <p>no response</p>
  // }
  return (
    // change css name to match HW, mess with settings
    <div className="feedback-list">
      {resp.map((each) => (
        <Post key={each.id} each={each} />
      ))}
    </div>
  );
}
