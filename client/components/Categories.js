import React from "react";

const Categories = ({ tabs, shop }) => {
  return (
    <ul className="nav nav-tabs nav-justified">
      <li className="active">
        <a
          onClick={() => {
            shop(0);
          }}
          data-toggle="tab"
          href="#home"
        >
          Shop
        </a>
      </li>
      {tabs.map((item, key) => {
        if (item !== "Shop") {
          return (
            <li key={key.toString()}>
              <a
                onClick={() => {
                  shop(key);
                }}
                data-toggle="tab"
                href="#menu1"
              >
                {item}
              </a>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Categories;
