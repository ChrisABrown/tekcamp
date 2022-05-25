import React from "react";

const LikesAndDislikes = (props) => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Like</div>
          <div className="ui basic red button">Dislike</div>
        </div>
      </div>
    </div>
  );
};

// set variables above export add function to export
export default LikesAndDislikes;
