import React from "react";
import ShopItem from "./Components/ShopItems";
import ShopModal from "./Components/ShopModal";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
      allInfo: [],
      genderInfo: "",
      styleInfo: "",
      sizeInfo: "",
      modalTemp: "",
    };
  }

  showShopModal() {
    this.setState({ showDetails: true });
  }

  closeShopModal() {
    this.setState({ showDetails: false });
  }

  modalInfo(info) {
    this.setState({ modalTemp: info.target.value });
  }

  genderInfo(info) {
    this.setState({ genderInfo: info.target.value });
  }

  styleInfo(info) {
    this.setState({ styleInfo: info.target.value });
  }

  sizeInfo(info) {
    this.setState({ sizeInfo: info.target.value });
  }

  onSubmit() {
    var info = [];
    info.push(
      this.state.genderInfo,
      this.state.styleInfo,
      this.state.sizeInfo,
      this.state.modalTemp
    );
    this.setState({ allInfo: info }, () => {
      this.props.submit(this.state.allInfo);
    });
  }

  render() {
    if (this.props.show) {
      return (
        <>
          <div className="row"></div>
          <ShopItem
            genderInfo={this.genderInfo.bind(this)}
            styleInfo={this.styleInfo.bind(this)}
            sizeInfo={this.sizeInfo.bind(this)}
          />
          <ShopModal
            show={this.state.showDetails}
            close={this.closeShopModal.bind(this)}
            modalInfo={this.modalInfo.bind(this)}
            onSubmit={this.onSubmit.bind(this)}
          />
          <div className="row text-center">
            <button
              type="button"
              className="btn btn-default btn-md"
              onClick={this.showShopModal.bind(this)}
            >
              Additional Details
            </button>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <img
                className="size-image all-images"
                src="http://localhost:3000/images/BandanaSize.png"
              ></img>
            </div>
          </div>
        </>
      );
    } else {
      return null;
    }
  }
}

export default Shop;
