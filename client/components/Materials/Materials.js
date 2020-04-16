import React from "react";

class Materials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage:
        "https://www.austincreativereuse.org/wp-content/uploads/2016/03/ACR_logo-1-e1530502357507.png",
      imageArray: [
        "https://www.austincreativereuse.org/wp-content/uploads/2016/03/ACR_logo-1-e1530502357507.png",
        "https://lh3.googleusercontent.com/Z-nMObv9sjtf9h4EkbTQ4-hunyffyx3T8fQFog8QjNXEIjzgOlNhaxe-Bl4en6TJu8nX8BGheeNCvfNd_GSKRikplUVZE6hUlg7xU4LGc1KUHYICvqGMwbJUyLllO2ZuNKfKFzQF7hg=s1080-no",
        "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/69607568_10156226606220966_870509318787563520_n.jpg?_nc_cat=104&_nc_sid=0be424&_nc_oc=AQntR61bPeoJDBUuaVI3XEqc3bMB1lJ2Akm7zLfSeiiaNXaq47pR92qdz6YH8vukvd0&_nc_ht=scontent-dfw5-2.xx&oh=51dde8876c491b731e64a9ab27fe431f&oe=5EBEC22B",
        "https://lh3.googleusercontent.com/giEtNkAVRTrNWc_c371SY4CAmuoIX60tnk2h74wTbSmFIqbu1892g8qLW0F0dvhNkP02UPBo3wSQrrgglMp41ajSp1syQ0g7MV5AYdU96zTstt5vdqVqB-FkezMw0aEAhh5J24kpQCqN8KLdX-1mLp46ejvf9O-Sqg21BRLkWSO_88hyPgLI8ap-lTFG_x2BuKnQsPCngz8Cv875I0IDba_pyu-o4QwW-paYA3qEZJ18va8kt_GcsZMtagxf9ZKzbPAVlP0CAzq-AO21DOnB8-Brt8FfOayExbdLXrjOgiBUEZIWl_09tNg_JAbCANcsFtU0G2kmmoSA2rdjO95lJmDQ5AfZHihkB055yKQlVVvos_iJs6195xEADOnCILs4aN2LgxrxCWx7p0NLTkX5rwtYYSRHq8lolzWtJaYrOmjsB7pEzHe43UmuZLta2TefvLIMcgLgHXfInInKtD17kupJkdk5-r9Pwim8hjsqcVcamMLHI-Y6PuEc5PjgyLWsf2mbWEiNfep-GW6YSO3D7vZ1Og2NsrzTq94ljFCXgdK_r1lbUnNss5lt5liBylm6OewMuqOlJtfQXAaq5G6TlYGWoAAdwHBdKk92ZXI7nQyT6pPDM1myfogECcbL1mjOC5eGfCtQeDTCfJh2eQ5mcKJxv-vrEwZyPXJJcMYEBbxIEZC4Lmu1B3NJn30HwPeYiEPVcCXCWSB0zoAJC5wwBl92OOY1cWKHtpyJG0yasdt9etkGP01e6rw=w385-h289-no",
        "https://lh3.googleusercontent.com/BVn-yste0sK6R0eiltqIzd8TxBnSa9voVMWATOsbaTSXYn38Hy-0dNgfCQqvC-mVhxki7ljXcYirm9WcvjpFDqD0ofyZvrmg9yauHoyKR-hgsMb23dmXwRw8guldSVswO2DpULtYOSU=s1644-no",
        "https://lh3.googleusercontent.com/4HUJT8nBq4Zz79wwne3gL5AocTEthDah02zpo_ggRSkDtvUxCPaIq1B-AxVnZlm6g6yglOdBWuMmC8neRgcNT2pPy-YpH1lhkzRPEoER4KQ4V_o0vGw51-E2iIH_c47CQMpQaEWnMHsl5tKP1nxgiHZMcno7K6X11sUll5ahkQUgUxV4CCHQC0xnCiFZ6jCOFyqcU2ASQ9wnGt3Z59l21hgjN5ukPZic-tedyFRa_awncAKRHJzAaybGAIJZeANmvUdGuPkxwSGD73QBkg4WoRRje4ppetKLpNd0i-k81Fze_3Pa-UuIzGNu8g2rLeezIPkIkabDsQ_6pX2m7-8WDVh_-JyrnZ0tgkfKJgLJGXzOvNX5caKVzWOwNxhuW63HpgQ_ErOJ0fMdFBuQI_8zG_wrrQG_G672UsXuYdnaetcBZ9QJ_vfPgpMDdU0X5GZek6o-yOOue8ESB0V5WQTbeFk7x6YCNA5wWmQ8UnWZlg0c330R3ILUW4kQLD4sXd--Zb1OswMt3c88cYN8F6LkhKSJgefgXiyaeeuBl5rGX0_d62SnX-icDUBjq3mEQU3P_DzElw_Fl7AFR4fYtapLQGDk-H2Kw2Il1xOJJGJQMm3Aq2Nn59tVWHnLXBuKRgGXRgrCoHgbHytWK_mAoDJ3lUe1CVmDy9av8XxvLreeZjPwpS9ehLiSWvihzSchCSRKcpcD4F97Xik2OeaSKX8J5HqTSbsn_KCJAHofJeTJnkOMgQ9j6imZa40=s1080-no",
        "https://lh3.googleusercontent.com/dyhF4t_bL7CGxYzKxzmaLMM8JmbFhFNXhnc6iF6rYcMB8Yj5Xr7Jaz1FYHzV3nZHeW7RvdTyjw1fiB_h_FyluSGXBkWd2_mmlZwUM16PkyXDtYtOgkoOLFdHAa48Sc39tIdVccbIwvb58AEaOfOK-7Ughq7TonfVot7MSMpEs2_p9FS8XEC0JEF8UpFH-mTVxrGtGbS7iVodqG_ue7QxxLkur-ahhn_M96m_XN1KqjMKkYOZJpeyaE6NJBmZaVi4Cn9PtL9qUDuI8shlsT32xAExmc9WpVDUAIEVIgHF1-SLhMD_EwTjAMi6H3qF-I8VpbvqeOUliTKsXT1s6cAcm_qXY0IFcaxrNQLVHJE7hMFcN1YnWgE2ZTeMXvfVWThlkm3V94W5_EYorQyc0Morpofo4WlErhF0R6QnykQ_v1GA3oCLwAYdO5bxP6UuiD_uGl1Q0vFMwvF5ifKni61PZYMe_Oiy9voGgOstz4svLIZHHUOyvmcitHxO2-ypfCJpwi6_yNDsaUspNKhAPMq0N-sSKJW7XiB7JFWCgB1bkq5iyQCOmHEwdABh_mugznTjWmdFVZbKV-AuqoSAo0cJrWmuuVt-HGJTQxck2nyva_oOrDoN7pLaDGXpbSeEH6S7TQgIXxC-2MuAHCpWXlS72fxjti8ub1zOCrXAhYv_8oVL6Z3QSeiRlI1pA7w4rA6CB3wv0aoUOwkrqX7VmH4ajco_uluE3fvaq2LPjQbEqbOmYIUuv7d606M=s1080-no",
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

  render() {
    if (this.props.show) {
      return (
        <div className="row material-border">
          <div className="col-md-6 material-padding-remove">
            <span
              onClick={() => {
                this.clickPrevious();
              }}
              className="glyphicon glyphicon-menu-left material-button-left"
              aria-hidden="true"
            ></span>
            <span
              onClick={() => {
                this.clickNext();
              }}
              className="glyphicon glyphicon-menu-right material-button-right"
              aria-hidden="true"
            ></span>

            <img
              className="material-image-border material-main-image"
              src={this.state.currentImage}
            />
          </div>
          <p></p>
          <div className="col-md-6 text-left material-padding-remove">
            <div>
              <h1 className="current-foster-hsize">Materials</h1>
              <p className="current-foster-psize">
                We try to minimize our carbon footprint, so we use recycled
                fabrics and sewing supplies.
                <br />
                <br />
                Austin Creative Reuse is our one stop shop all of our bandana
                supplies.
                <br />
                <br /> We offer all of our Bandanas to you for just the shop of
                shipping, however we do accept donations for the supplies, or
                make a direct contribution to APA. <br />
                <br /> More info to come.
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

export default Materials;
