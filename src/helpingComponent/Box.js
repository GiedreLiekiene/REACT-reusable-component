import React from "react";

const Box = (props) => {
  return (
    <>
      <div
        style={{
          width: "200px",
          height: "200px",
          border: "1px solid black",
        }}
      >
        <h1>{props.value.id}</h1>
        <h2>{props.value.title}</h2>
      </div>
    </>
  );
};

export default Box;
