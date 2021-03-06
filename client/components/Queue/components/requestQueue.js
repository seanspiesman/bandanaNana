import React from "react";

const TotalQueue = ({ item, index, remove, add }) => {
  if (item.queue.length === 1) {
    return (
      <>
        <li>
          <h2>{item.name}</h2>
          <p style={{ fontSize: "16px" }}>
            {item.queue[0][2] +
              " " +
              item.queue[0][1].toLowerCase() +
              " for " +
              item.queue[0][0].toLowerCase() +
              "."}{" "}
            <small>{"Notes: " + item.queue[0][3]}</small>{" "}
            <button
              className="btn btn-sm"
              onClick={() => {
                remove(index);
              }}
            >
              Delete
            </button>
            {"   "}
            <button
              className="btn btn-sm"
              onClick={() => {
                add(index);
              }}
            >
              Add
            </button>
          </p>
        </li>
      </>
    );
  } else if (item.queue.length === 2) {
    return (
      <>
        <li>
          <h2>{item.name}</h2>
          <p style={{ fontSize: "16px" }}>
            {item.queue[0][2] +
              " " +
              item.queue[0][1].toLowerCase() +
              " for " +
              item.queue[0][0].toLowerCase() +
              "."}{" "}
            <small>{"Notes: " + item.queue[0][3]}</small>{" "}
          </p>
          <p style={{ fontSize: "16px" }}>
            {item.queue[1][2] +
              " " +
              item.queue[1][1].toLowerCase() +
              " for " +
              item.queue[1][0].toLowerCase() +
              "."}{" "}
            <small>{"Notes: " + item.queue[1][3]}</small>{" "}
            <button
              className="btn btn-sm"
              onClick={() => {
                remove(index);
              }}
            >
              Delete
            </button>{" "}
            {"   "}
            <button
              className="btn btn-sm"
              onClick={() => {
                add(index);
              }}
            >
              Add
            </button>
          </p>
        </li>
      </>
    );
  } else if (item.queue.length === 3) {
    return (
      <>
        <li>
          <h2>{item.name}</h2>
          <p style={{ fontSize: "16px" }}>
            {item.queue[0][2] +
              " " +
              item.queue[0][1].toLowerCase() +
              " for " +
              item.queue[0][0].toLowerCase() +
              "."}{" "}
            <small>{"Notes: " + item.queue[0][3]}</small>{" "}
          </p>
          <p style={{ fontSize: "16px" }}>
            {item.queue[1][2] +
              " " +
              item.queue[1][1].toLowerCase() +
              " for " +
              item.queue[1][0].toLowerCase() +
              "."}{" "}
            <small>{"Notes: " + item.queue[1][3]}</small>{" "}
          </p>
          <p style={{ fontSize: "16px" }}>
            {item.queue[2][2] +
              " " +
              item.queue[2][1].toLowerCase() +
              " for " +
              item.queue[2][0].toLowerCase() +
              "."}{" "}
            <small>{"Notes: " + item.queue[2][3]}</small>{" "}
            <button
              className="btn btn-sm"
              onClick={() => {
                remove(index);
              }}
            >
              Delete
            </button>{" "}
            {"   "}
            <button
              className="btn btn-sm"
              onClick={() => {
                add(index);
              }}
            >
              Add
            </button>
          </p>
        </li>
      </>
    );
  }
};

export default TotalQueue;
