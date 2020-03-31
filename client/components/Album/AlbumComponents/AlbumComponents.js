import React from "react";
import Divider from "./Divider";

const AlbumComponents = ({ images }) => {
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
  // console.log(firstColumn, secondColumn, thirdColumn, fourthColumn);

  return (
    <>
      <div className="col-md-3">
        {firstColumn.map((item, index) => {
          // console.log(item);
          return <Divider image={item} key={"column1" + index} />;
        })}
      </div>
      <div className="col-md-3">
        {secondColumn.map((item, index) => {
          return <Divider image={item} key={"column2" + index} />;
        })}
      </div>
      <div className="col-md-3">
        {thirdColumn.map((item, index) => {
          return <Divider image={item} key={"column3" + index} />;
        })}
      </div>
      <div className="col-md-3">
        {fourthColumn.map((item, index) => {
          return <Divider image={item} key={"column4" + index} />;
        })}
      </div>
      {/* <div className="col-md-3"></div>
      <div className="col-md-3"></div>
      <div className="col-md-3"></div> */}
    </>
  );
};

export default AlbumComponents;
