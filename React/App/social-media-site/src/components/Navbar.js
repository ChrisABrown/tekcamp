import React from "react";

function Navbar({ text }) {
  const headerStyles = {
    backgroundColor: "grey",
    color: "ghostwhite",
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Navbar.defaultProps = {
  text: "Username",
};

export default Navbar;
