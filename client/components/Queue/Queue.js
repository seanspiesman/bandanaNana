import React from "react";
import YourQueue from "./components/YourQueue";

const Queue = ({ show, list, remove }) => {
  if (show) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 queue-font">
            <h2>Your Queue</h2>
            <ul>
              {list.map((item, index) => {
                return <YourQueue item={item} key={index} index={index} remove={remove} />;
              })}
            </ul>
          </div>
          <div className="col-md-6 queue-font">
            <h2>Build Queue</h2>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Queue;
