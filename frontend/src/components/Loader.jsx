import { Spinner } from "react-bootstrap";
import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        margin: "auto",
        display: "block"
      }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
