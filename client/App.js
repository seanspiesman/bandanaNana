import React from "react";
import Categories from "./components/Categories";
import NavBar from "./components/NavBar/Signin";
import Shop from "./components/Shop/Shop";
import Album from "./components/Album/Album";
import Creator from "./components/Creator/Creator";
import Materials from "./components/Materials/Materials";
import Queue from "./components/Queue/Queue";
import CurrentFosters from "./components/CurrentFosters/CurrentFosters";
import Axios from "axios";

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
      username: "",
      loggedIn: false,
      buildQueue: [],
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
    if (this.state.username.length !== 0) {
      var newQueue = [...this.state.queueInfo, [...item]];
      Axios.post("BandanaNana.us-east-1.elasticbeanstalk.com/placeInQueue", {
        username: this.state.username,
        queue: newQueue,
      })
        .then(() => {
          console.log("worked");
          this.setState({ queueInfo: [...this.state.queueInfo, [...item]] });
        })
        .catch("error");
    } else {
      alert("Please Login To Continue");
    }
  }

  loadQueue(username) {
    Axios.get("BandanaNana.us-east-1.elasticbeanstalk.com/queueItems", {
      params: {
        id: username,
      },
    }).then((result) => {
      if (result.data.length !== 0) this.setState({ queueInfo: result.data });
    });
  }

  removeFromQueue(index) {
    var newQueue = this.state.queueInfo.slice();
    newQueue.splice(index, 1);
    Axios.post("BandanaNana.us-east-1.elasticbeanstalk.com/placeInQueue", {
      username: this.state.username,
      queue: newQueue,
    })
      .then(() => {
        this.setState({ queueInfo: newQueue });
      })
      .catch("error");
  }

  setUsername(username) {
    this.setState({ username }, () => {
      this.loadQueue(username);
    });
  }

  render() {
    return (
      <div className="container">
        <NavBar username={this.setUsername.bind(this)} />
        <Categories tabs={this.state.tabArray} tab={this.tabClick.bind(this)} />
        <CurrentFosters show={this.state.fosters} />
        <Shop show={this.state.shop} submit={this.addToQueue.bind(this)} />
        <Materials show={this.state.materials} />
        <Queue
          user={this.state.username}
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
