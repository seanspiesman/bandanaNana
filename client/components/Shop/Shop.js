import React from "react";
import ShopItem from "./Components/ShopItems";
import ShopModal from "./Components/ShopModal";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false
    };
  }

  showShopModal() {
    this.setState({ showDetails: true });
  }

  closeShopModal() {
    this.setState({ showDetails: false });
  }

  render() {
    if (this.props.show) {
      return (
        <>
          <ShopItem />
          <ShopModal
            show={this.state.showDetails}
            close={this.closeShopModal.bind(this)}
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
