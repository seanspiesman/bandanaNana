import React from "react";
import Axios from "axios";

class CurrentFosters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage:
        "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/93361875_10156820567935966_7639276072457994240_n.jpg?_nc_cat=107&_nc_sid=0be424&_nc_oc=AQlzSwlVLEcwR8PxYKP70nOVkyojKNpuY-iebtgvQQp4K_lV1QAe2pRnCRokSb6QIOY&_nc_ht=scontent-dfw5-2.xx&oh=36a5ed8a7f7729a2d0be1e22fc90799c&oe=5EBE008A",
      imageArray: [
        "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/93361875_10156820567935966_7639276072457994240_n.jpg?_nc_cat=107&_nc_sid=0be424&_nc_oc=AQlzSwlVLEcwR8PxYKP70nOVkyojKNpuY-iebtgvQQp4K_lV1QAe2pRnCRokSb6QIOY&_nc_ht=scontent-dfw5-2.xx&oh=36a5ed8a7f7729a2d0be1e22fc90799c&oe=5EBE008A",
        "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/93770205_10156820566535966_3129006103178772480_n.jpg?_nc_cat=103&_nc_sid=0be424&_nc_oc=AQlKqdjfIYyAJ24v0-94ReY1Z9El0RbBLkPRWdG8t7SoxjepbXVfbTsycLDN4t6ZUU8&_nc_ht=scontent-dfw5-1.xx&oh=a24aa1f366c54952114a1e08e457ae20&oe=5EBDB811",
        "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/93047021_10156820566645966_5905732872706195456_n.jpg?_nc_cat=106&_nc_sid=0be424&_nc_oc=AQk2ZfuOLrnAXqBlLRi4Bq_uFEoY45YiSyi354aupL3xjkCvdckljqfN1mA1LnqcIVk&_nc_ht=scontent-dfw5-2.xx&oh=0d3c2c42cab98e42a3807e09801a895d&oe=5EBE4173",
        "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/92953115_10156820566730966_7505523665509810176_n.jpg?_nc_cat=107&_nc_sid=0be424&_nc_oc=AQkgnquBbUvmrn1xLDfbo-m_FlS2WJhfSmQLmA8c-z1djXUDA0gcGB4sUQylaHjkh9s&_nc_ht=scontent-dfw5-2.xx&oh=72a497ecf8dbdc68c81cc5e86c5659c3&oe=5EBFC20E",
        "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/93770553_10156820566845966_5057085955362521088_n.jpg?_nc_cat=106&_nc_sid=0be424&_nc_oc=AQlEcpShQjUjjuV1x8NivwCWpqiSC91hcASFBtVpP5uPA_Kuwv9qMxqCIG3AQciOKng&_nc_ht=scontent-dfw5-2.xx&oh=1e861fe18c94553c1c6fe4fe2249cd8e&oe=5EBD729A",
        "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/93273997_10156820566925966_1403272403806584832_n.jpg?_nc_cat=100&_nc_sid=0be424&_nc_oc=AQnlAqn3Z_7_fj8X3aH_uGuyQSZG-A91lhx22iDO_wjbIjf8HjFYTU_1lHIDZheQcJY&_nc_ht=scontent-dfw5-2.xx&oh=3181d4909082190e8a53b083ae8a6566&oe=5EBC8936",
        "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/92847747_10156820567020966_4911962270310858752_n.jpg?_nc_cat=110&_nc_sid=0be424&_nc_oc=AQmz1oY5-qm5rKeXPTLsNBnoqWxQRbyKaEa_Wif3i--Fqmx7hhv9sKm_gbC6PcjdgYU&_nc_ht=scontent-dfw5-1.xx&oh=95d013713111e3f06fd0fbc90d504f6e&oe=5EBC1FF8",
        "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/93356042_10156820567145966_4282353037181190144_n.jpg?_nc_cat=100&_nc_sid=0be424&_nc_oc=AQmlDzTp4xpuMTlFHC_W8eoutMAmWuCVRU1tl04z8rQWPH3lUB8DsMcw6Rh7AeyuX7s&_nc_ht=scontent-dfw5-2.xx&oh=e2aec8c560194e6c2dd784407d9a42c9&oe=5EBD3F8B",
        "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/92978769_10156820568170966_1865443934629527552_n.jpg?_nc_cat=109&_nc_sid=0be424&_nc_oc=AQk7ye9Pa5JtMixGR-Q9OI1CNvLmKIguIUFe_48v_ZFU9Abie4o6q3Ioimg1hA056iE&_nc_ht=scontent-dfw5-1.xx&oh=2c7e8ea2b07ab51a398f8d703c8d1fc8&oe=5EBC5851",
      ],
      count: 0,
    };
  }

  clickNext() {
    var currCount = this.state.count + 1;
    if (this.state.count === this.state.imageArray.length - 1) {
      currCount = 0;
      this.setState({
        count: 0,
        currentImage: this.state.imageArray[currCount],
      });
    } else {
      this.setState({
        count: currCount,
        currentImage: this.state.imageArray[currCount],
      });
    }
  }

  clickPrevious() {
    var currCount = this.state.count;
    if (this.state.count === 0) {
      currCount = this.state.imageArray.length - 1;
      this.setState({
        count: this.state.imageArray.length - 1,
        currentImage: this.state.imageArray[currCount],
      });
    } else {
      this.setState({
        count: currCount - 1,
        currentImage: this.state.imageArray[currCount - 1],
      });
    }
  }

  rerender() {}

  render() {
    if (this.props.show) {
      return (
        <div className="row current-foster-border">
          <div className="col-md-6 current-foster-padding-remove">
            <span
              onClick={() => {
                this.clickPrevious();
              }}
              className="glyphicon glyphicon-menu-left current-foster-button-left"
              aria-hidden="true"
            ></span>
            <span
              onClick={() => {
                this.clickNext();
              }}
              className="glyphicon glyphicon-menu-right current-foster-button-right"
              aria-hidden="true"
            ></span>

            <img
              className="current-foster-image-border current-foster-main-image"
              src={this.state.currentImage}
            />
          </div>
          <p></p>
          <div className="col-md-6 text-left current-foster-padding-remove">
            <div>
              <h1 className="current-foster-hsize">Firecracker (APA)</h1>
              <p className="current-foster-psize">
                Firecracker's name does not do her justice, she is one of the
                sweetest cats we have ever fostered. She has never given us any
                sort of attitude. <br />
                After having her in our home for a few weeks she gave birth to a
                healthy litter of 7. We were assigned the letter P for the
                litter by APA, so they all have names starting with P.
                <br />
                <br /> They all have continued to gain weight everyday except
                one. Unfortunately the one, named Pudding, had to be taken to
                APA's prenatal kitten ward due to eating problems. We are
                praying for her speedy recovery. <br />
                <br /> She will returned to us once her health has stabilized.
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default CurrentFosters;

// Firecracker's name does not do her justice, she is one of the sweetest cats we have ever fostered. She has never given us any sort of attitude. <br /> After having her in our home for a few weeks she gave birth to a healthy litter of 7. We were assigned the letter P for the litter by APA, so they all have names starting with P. <br /> <br /> They all have continued to gain weight everyday except one. Unfortunately the one, named Pudding, had to be taken to APA's prenatal kitten ward due to eating problems. We are praying for her speedy recovery. <br /> <br /> She will returned to us once her health has stabilized.
