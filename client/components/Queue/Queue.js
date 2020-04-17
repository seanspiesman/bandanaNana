import React from "react";
import YourQueue from "./components/YourQueue";
import Axios from "axios";

class Queue extends React.Component {
  constructor(props) {
    // this.props.show, this.props.list, this.props.remove, user
    super(props);
    this.state = {
      totalQueue,
    };
  }

  adminInfo() {
    // Axios.get('/')
  }

  render() {
    if (this.props.show && this.props.user === "admin") {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 queue-font">
              <h2>Build Requests</h2>
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
