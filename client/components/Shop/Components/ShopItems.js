import React from "react";

const ShopItems = ({ genderInfo, styleInfo, sizeInfo }) => {
  return (
    <div className="container">
      <div className="row" style={{ paddingTop: "10px" }}>
        <div className="col-sm-4 shop-sm-col-4">
          <div className="form-group">
            <label htmlFor="sel1">Gender</label>
            <select className="form-control" id="sel1" onChange={genderInfo}>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
        <div className="col-sm-4 shop-sm-col-4">
          <div className="form-group">
            <label htmlFor="sel1">Style</label>
            <select className="form-control" id="sel1" onChange={styleInfo}>
              <option>Select Style</option>
              <option>Tie-on</option>
              <option>Slip-on</option>
            </select>
          </div>
        </div>
        <div className="col-sm-4 shop-sm-col-4">
          <div className="form-group">
            <label htmlFor="sel1">Size</label>
            <select className="form-control" id="sel1" onChange={sizeInfo}>
              <option>Select Size</option>
              <option>X-Small</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>X-Large</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItems;
