import React from "react";

const Categories = ({ tabs, tab }) => {
  return (
    <ul className="nav nav-tabs nav-justified">
      <li className="active">
        <a
          onClick={() => {
            tab(0);
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
                  tab(key);
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
