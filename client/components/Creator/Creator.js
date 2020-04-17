import React from "react";
import Axios from "axios";
import Details from "../Details";

class Creator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creators: [],
    };
  }

  componentDidMount() {
    Axios.get("http://bandananana.us-east-1.elasticbeanstalk.com/creatorinfo")
      .then((results) => {
        this.setState({ creators: results.data });
      })
      .catch((err) => {
        console.log("error");
      });
  }

  render() {
    if (this.props.show) {
      return (
        <>
          {/* <div>hello</div> */}
          {this.state.creators.map((info, index) => {
            return <Details details={info} key={index} index={index} />;
          })}
        </>
      );
    } else {
      return null;
    }
  }
}

export default Creator;

// Lyn Mehe'ula
// Proud fur Mama! Modeling my creations are my fur babies - Penny Louise, Mara Maywho, Juniper Marie, and Layla Belle

// How it all began
// I was sitting at work one day, staring at picutres of my children when I realize they needed some extra pizzaz! They are goodest girls, and they want to show off their products to the world!

// All proceeds go to Austin Pets Alive!

