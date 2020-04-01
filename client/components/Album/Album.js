import React from "react";
import AlbumComponents from "./AlbumComponents/AlbumComponents";
import axios from "axios";
import Modal from "./AlbumComponents/Modal";

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageArray: [],
      modalItem: "",
      showModal: false
    };
  }

  componentDidMount() {
    axios
      .get("/albumImages")
      .then(response => {
        this.setState({ imageArray: response.data });
      })
      .catch(err => {
        console.log("Error");
      });
  }
  itemZoomClick(item) {
    this.setState({ modalItem: item, showModal: true });
  }
  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    if (this.props.show) {
      return (
        <div className="container">
          <Modal
            modalImage={this.state.modalItem}
            show={this.state.showModal}
            close={this.closeModal.bind(this)}
          />
          <div className="row">
            <AlbumComponents
              images={this.state.imageArray}
              zoom={this.itemZoomClick.bind(this)}
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Album;
