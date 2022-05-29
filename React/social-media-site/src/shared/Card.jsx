import React from "react";
import PropTypes from "prop-types";

function Card({ children, reverse }) {
  // return <div className={`card ${reverse && 'reverse'}`}}>{children}</div> CONDITIONAL CLASSES

  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.8)" : "white",
        color: reverse ? "white" : "rgba(0,0,0,0.8)",
      }}
    ></div>
  );
}

Card.defaultProps = {
  reverse: true,
};

Card.propTypes = {
  reverse: PropTypes.bool,
};
export default Card;
