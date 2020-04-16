import React from "react";
import Categories from "./components/Categories";
import NavBar from "./components/NavBar/Signin";
import Shop from "./components/Shop/Shop";
import Album from "./components/Album/Album";
import Creator from "./components/Creator/Creator";
import Materials from "./components/Materials/Materials";
import Queue from "./components/Queue/Queue";
import CurrentFosters from "./components/CurrentFosters/CurrentFosters";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fosters: true,
      shop: false,
      album: false,
      materials: false,
      queue: false,
      creators: false,
      previousTab: 0,
      tabSelectIndex: 0,
      tabArray: ["Fosters", "Shop", "Materials", "Queue", "Album", "Creators"],
      queueInfo: [],
    };
  }

  tabClick(index) {
    var prev = this.state.tabArray[this.state.previousTab];
    var current = this.state.tabArray[index];
    this.setState({
      [prev.toLowerCase()]: false,
      [current.toLowerCase()]: true,
      previousTab: index,
    });
  }

  addToQueue(item) {
    this.setState({ queueInfo: [...this.state.queueInfo, [...item]] });
  }

  removeFromQueue(index) {
    console.log(index);
    var newQueue = this.state.queueInfo.slice();
    newQueue.splice(index, 1);
    this.setState({ queueInfo: newQueue });
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        <Categories tabs={this.state.tabArray} tab={this.tabClick.bind(this)} />
        <CurrentFosters show={this.state.fosters} />
        <Shop show={this.state.shop} submit={this.addToQueue.bind(this)} />
        <Materials show={this.state.materials} />
        <Queue
          show={this.state.queue}
          list={this.state.queueInfo}
          remove={this.removeFromQueue.bind(this)}
        />
        <Album show={this.state.album} />
        <Creator show={this.state.creators} />
      </div>
    );
  }
}
