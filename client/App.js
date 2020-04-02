import React from "react";
import Categories from "./components/Categories";
import Signin from "./components/Signin/Signin";
import Shop from "./components/Shop/Shop";
import Album from "./components/Album/Album";
import Creator from "./components/Creator/Creator";
import Materials from "./components/Materials/Materials";
import Queue from "./components/Queue/Queue";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shop: true,
      album: false,
      materials: false,
      queue: false,
      creator: false,
      previousTab: 0,
      tabSelectIndex: 0,
      tabArray: ["Shop", "Materials", "Queue", "Album", "Creator"]
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
      <div className="container">
        <Signin />
        <Categories
          tabs={this.state.tabArray}
          shop={this.shopClick.bind(this)}
        />
        <Queue show={this.state.queue} />
        <Shop show={this.state.shop} />
        <Album show={this.state.album} />
        <Creator show={this.state.creator} />
        <Materials show={this.state.materials} />
      </div>
    );
  }
}
