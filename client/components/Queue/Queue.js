import React from "react";
import YourQueue from "./components/YourQueue";
import Axios from "axios";
import TotalQueue from "./components/requestQueue";
import BuildQueue from "./components/BuildQueue";
import CBuild from "./components/CBuildQueue";

class Queue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQueue: [],
      buildQueue: [],
      changeHandler: 0,
    };
  }

  componentDidUpdate() {
    if (this.props.user === "admin") {
      this.adminInfo();
    }
    this.buildInfo();
  }

  adminInfo() {
    Axios.get("http://bandananana.us-east-1.elasticbeanstalk.com/allQueueItems")
      .then((result) => {
        var Qarray = [];
        for (var i = 0; i < result.data.length; i++) {
          var personObject = {};
          var personQueue = [];
          if (
            result.data[i].queue !== null &&
            result.data[i].queue.length !== 0
          ) {
            personQueue = JSON.parse(result.data[i].queue);
            personObject.name = result.data[i].username;
            personObject.queue = personQueue;
          }
          if (Object.keys(personObject).length !== 0) {
            Qarray.push(personObject);
          }
        }
        if (
          this.state.totalQueue.length === 0 &&
          this.state.buildQueue.length === 0 &&
          this.state.changeHandler !== 1
        ) {
          this.setState({ totalQueue: Qarray, changeHandler: 1 });
        }
      })
      .catch(() => {
        console.log("error");
      });
  }

  buildInfo() {
    Axios.get(
      "http://bandananana.us-east-1.elasticbeanstalk.com/buildQueue"
    ).then((results) => {
      if (this.state.buildQueue.length === 0) {
        this.setState({ buildQueue: results.data });
      }
    });
  }

  removeFromRequests(index) {
    var newQueue = this.state.totalQueue.slice();
    newQueue.splice(index, 1);
    Axios.post(
      "http://bandananana.us-east-1.elasticbeanstalk.com/placeInQueue",
      {
        username: this.state.totalQueue[index].name,
      }
    )
      .then((results) => {
        this.setState({ totalQueue: newQueue });
      })
      .catch((err) => {
        console.log("error");
      });
  }

  addBuildQueue(index) {
    var newState = this.state.buildQueue;
    console.log(this.state.totalQueue[index]);
    newState.push(this.state.totalQueue[index]);
    Axios.post("http://bandananana.us-east-1.elasticbeanstalk.com/buildQueue", {
      newState,
    });
    this.setState({ buildQueue: newState }, () => {
      this.removeFromRequests(index);
    });
  }

  removeFromBuild(index) {
    var newBuildQueue = this.state.buildQueue.slice();
    newBuildQueue.splice(index, 1);
    Axios.post(
      "http://bandananana.us-east-1.elasticbeanstalk.com/removeFromBuild",
      {
        username: this.state.buildQueue[index].name,
      }
    )
      .then((results) => {
        console.log(results);
        this.setState({ buildQueue: newBuildQueue });
      })
      .catch((err) => {
        console.log("error");
      });
  }

  render() {
    if (this.props.show && this.props.user === "admin") {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 queue-font">
              <h2>Build Requests</h2>
              <ul>
                {this.state.totalQueue.map((item, index) => {
                  return (
                    <TotalQueue
                      item={item}
                      index={index}
                      key={index}
                      remove={this.removeFromRequests.bind(this)}
                      add={this.addBuildQueue.bind(this)}
                    />
                  );
                })}
              </ul>
            </div>
            <div className="col-md-6 queue-font">
              <h2>Build Queue</h2>
              <ul>
                {this.state.buildQueue.map((item, index) => {
                  return (
                    <BuildQueue
                      item={item}
                      index={index}
                      key={index}
                      remove={this.removeFromBuild.bind(this)}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      );
    } else if (this.props.show) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 queue-font">
              <h2>Your Queue</h2>
              <ul>
                {this.props.list.map((item, index) => {
                  return (
                    <YourQueue
                      item={item}
                      key={index}
                      index={index}
                      remove={this.props.remove}
                    />
                  );
                })}
              </ul>
            </div>
            <div className="col-md-6 queue-font">
              <h2>Build Queue</h2>
              <ul>
                {this.state.buildQueue.map((item, index) => {
                  return (
                    <CBuild
                      item={item}
                      index={index}
                      key={index}
                      remove={this.removeFromBuild.bind(this)}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Queue;

// const Queue = ({ show, list, remove, user }) => {
//   if (show && user === "admin") {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6 queue-font">
//             <h2>Build Requests</h2>
//             <ul>
//               {list.map((item, index) => {
//                 return (
//                   <YourQueue
//                     item={item}
//                     key={index}
//                     index={index}
//                     remove={remove}
//                   />
//                 );
//               })}
//             </ul>
//           </div>
//           <div className="col-md-6 queue-font">
//             <h2>Build Queue</h2>
//           </div>
//         </div>
//       </div>
//     );
//   } else if (show) {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6 queue-font">
//             <h2>Your Queue</h2>
//             <ul>
//               {list.map((item, index) => {
//                 return (
//                   <YourQueue
//                     item={item}
//                     key={index}
//                     index={index}
//                     remove={remove}
//                   />
//                 );
//               })}
//             </ul>
//           </div>
//           <div className="col-md-6 queue-font">
//             <h2>Build Queue</h2>
//           </div>
//         </div>
//       </div>
//     );
//   } else {
//     return null;
//   }
// };

// export default Queue;
