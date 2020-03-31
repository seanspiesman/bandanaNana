import React from "react";

const Shop = ({ show }) => {
  if (show) {
    return (
      <div>
        <img
          className="shop-image"
          src="https://i.etsystatic.com/20507177/r/il/ad0063/2159868519/il_1588xN.2159868519_oelp.jpg"
          alt="Card image cap"
        />
      </div>
    );
  } else {
    return null;
  }
};

export default Shop;
