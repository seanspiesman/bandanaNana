import React from "react";
import Categories from "./components/Categories";
import Signin from "./components/Signin";
import Shop from "./components/Shop";
import Album from "./components/Album";
import Creator from "./components/Creator";
import Materials from "./components/Materials";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shop: true,
      album: false,
      materials: false,
      creator: false,
      previousTab: 0,
      tabSelectIndex: 0,
      tabArray: ["Shop", "Materials", "Size Chart", "Album", "Creator"]
    };
  }

  shopClick(index) {
    var prev = this.state.tabArray[this.state.previousTab];
    var current = this.state.tabArray[index];
    this.setState({
      [prev.toLowerCase()]: false,
      [current.toLowerCase()]: true,
      previousTab: index
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Signin />
        <Categories
          tabs={this.state.tabArray}
          shop={this.shopClick.bind(this)}
        />
        <Shop show={this.state.shop} />
        <Album show={this.state.album} />
        <Creator show={this.state.creator} />
        <Materials show={this.state.materials} />
      </div>
    );
  }
}
