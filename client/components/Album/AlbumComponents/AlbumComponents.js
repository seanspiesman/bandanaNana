import React from "react";
import Divider from "./Divider";

const AlbumComponents = ({ images, zoom }) => {
  var amtPerColumn = Math.floor(images.length - 1);
  var firstColumn = [],
    secondColumn = [],
    thirdColumn = [],
    fourthColumn = [];
  for (var i = 0; i < images.length; i += 4) {
    firstColumn.push(images[i]);
    if (i + 1 < images.length) secondColumn.push(images[i + 1]);
    if (i + 2 < images.length) thirdColumn.push(images[i + 2]);
    if (i + 3 < images.length) fourthColumn.push(images[i + 3]);
  }

  return (
    <>
      <div className="col-md-3 album-col-md-3" style={{ paddingLeft: "15px" }}>
        {firstColumn.map((item, index) => {
          return (
            <Divider
              image={item}
              index={item}
              key={"column1" + index}
              zoom={zoom.bind(this)}
            />
          );
        })}
      </div>
      <div className="col-md-3 album-col-md-3">
        {secondColumn.map((item, index) => {
          return (
            <Divider
              image={item}
              index={item}
              key={"column2" + index}
              zoom={zoom.bind(this)}
            />
          );
        })}
      </div>
      <div className="col-md-3 album-col-md-3">
        {thirdColumn.map((item, index) => {
          return (
            <Divider
              image={item}
              index={item}
              key={"column3" + index}
              zoom={zoom.bind(this)}
            />
          );
        })}
      </div>
      <div className="col-md-3 album-col-md-3">
        {fourthColumn.map((item, index) => {
          return (
            <Divider
              image={item}
              index={item}
              key={"column4" + index}
              zoom={zoom.bind(this)}
            />
          );
        })}
      </div>
    </>
  );
};

export default AlbumComponents;
