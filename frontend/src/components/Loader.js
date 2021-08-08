import React from "react";
import { Spinner } from "react-bootstrap";

function Loader() {
  return (
    <div>
      <Spinner
        animation="border"
        variant="primary"
        style={{ margin: "auto", display: "block" }}
      />
    </div>
  );
}

export default Loader;
