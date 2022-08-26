import { findByTitle } from "@testing-library/react";
import React from "react";

function Judul({ id, text }) {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1 className="text-center" id={id}>
            {text}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Judul;
