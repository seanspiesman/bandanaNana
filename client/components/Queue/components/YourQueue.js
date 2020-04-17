import React from "react";

const YourQueue = ({ item, index, remove }) => {
  return (
    <>
      <li style={{ fontSize: "20px" }}>
        {item[2] +
          " " +
          item[1].toLowerCase() +
          " for " +
          item[0].toLowerCase() +
          "."}{" "}
        <small>{"Notes: " + item[3]}</small>
        <button
          className="btn btn-sm"
          onClick={() => {
            remove(index);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default YourQueue;
