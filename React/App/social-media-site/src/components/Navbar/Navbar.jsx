import React from "react";
import Posts from "../PostFeed/PostFeed";

function Navbar(props) {
  const headerStyles = {
    backgroundColor: "grey",
    color: "ghostwhite",
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>Welcome, {props.text}</h2>
      </div>
    </header>
  );
}

export default Navbar;
