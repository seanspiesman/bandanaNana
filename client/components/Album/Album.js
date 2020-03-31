import React from "react";
import AlbumComponents from "./AlbumComponents/AlbumComponents";

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageArray: [
        "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/69601029_10156226605720966_8325071865890471936_n.jpg?_nc_cat=109&_nc_sid=0be424&_nc_oc=AQnY5zykmuAoygT_nRAUFHtrqecxG8ZCL0deaixyiPiPYvKWBVTns3o_ZEa8WTkXMEs&_nc_ht=scontent-dfw5-1.xx&oh=544edafbdc8b61520f33c9c6bdb1e0dc&oe=5EA86C10",
        "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/69763359_10156226605835966_2124622499156066304_n.jpg?_nc_cat=111&_nc_sid=0be424&_nc_oc=AQmQso6CZq4kZL4A-RVAMBXoLjnJSLGXjDGYL6B4Z8kULwYq3ZR8aT_ysotRgcyJ91I&_nc_ht=scontent-dfw5-1.xx&oh=a0ca714abaeddcaff0f7a4bb8009f3c8&oe=5EAA544F",
        "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/69219462_10156226605915966_1420038817963835392_n.jpg?_nc_cat=109&_nc_sid=0be424&_nc_oc=AQnjocEGLWGrh5CXuHHfrD0DGuniBD6neyxtasEQtssgtUIxkTqaClpzTinQbRj03RU&_nc_ht=scontent-dfw5-1.xx&oh=ed4bcee294b202929ce710ec5d32cde7&oe=5EA75AAF",
        "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/69416021_10156226605965966_7485973197716717568_n.jpg?_nc_cat=105&_nc_sid=0be424&_nc_oc=AQl77C4oC5YQBXUxeV-obm8BIlX3FK86JGW9BA4BeYerpwFCDFGpnI1eFeIOtqnIYuQ&_nc_ht=scontent-dfw5-1.xx&oh=90af93df04cd7e84013452c142b6315e&oe=5EA9DBC2",
        "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/69213588_10156226606015966_5266534923224743936_n.jpg?_nc_cat=104&_nc_sid=0be424&_nc_oc=AQlrIMfbRAkTY73CKBzgqdcqejgiimplmTJUG7W03Vp4A5v3jFkYku_13xb83vIytT0&_nc_ht=scontent-dfw5-2.xx&oh=01c64dbb62f2b1d5885cd8b10fc2348b&oe=5EA6E8A4",
        "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/69809397_10156226606175966_4962073543538900992_n.jpg?_nc_cat=111&_nc_sid=0be424&_nc_oc=AQmCNr2JBuHx4bXu_UvRxctVPyMSTDwkHzrHC3KA3GRiWF9b3GhOSyopqQkv9Iu9BoU&_nc_ht=scontent-dfw5-1.xx&oh=57038914ccf1d2898270b4c40063f9c6&oe=5EA731FC",
        "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/68858002_10156226606305966_7987685348517871616_n.jpg?_nc_cat=105&_nc_sid=0be424&_nc_oc=AQmSjcN6JziXoD3Z_av_UZbQoagCEp85EbnrMeWKRRadUDLiW51l2fSg9Vue4NnWo1w&_nc_ht=scontent-dfw5-1.xx&oh=53b41fc97e0023c54933bf03b1101088&oe=5EA8CEAE",
        "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/69751888_10156226606410966_4455702439848312832_n.jpg?_nc_cat=107&_nc_sid=0be424&_nc_oc=AQm_v8IU6EC8Sgd7l4VordPwwYng1nPA2cFqHhrmUwlBv-3FDawCIvureROVJ7cA5yk&_nc_ht=scontent-dfw5-2.xx&oh=e45c87f1c8a712de2fd0a1f023c872e5&oe=5EAA4EF2",
        "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/69465643_10156226606460966_4457652355000696832_n.jpg?_nc_cat=110&_nc_sid=0be424&_nc_oc=AQkcwJmbbZhx7gQ14sIVMFn7BefxsUw8IhOfF9RdiL-7xGIAyWL8KkFbvb27xxRpmng&_nc_ht=scontent-dfw5-1.xx&oh=6ff48b2c65b210369507a97f4057e5e9&oe=5EA6B17C",
        "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/69256720_10156226606500966_6499117501257875456_n.jpg?_nc_cat=104&_nc_sid=0be424&_nc_oc=AQl72P01DafRrrMlTlnCjThfDkUVT2LS3mwm-gat6LAzA-D_9hevgArVCjqdPtc5L88&_nc_ht=scontent-dfw5-2.xx&oh=1d01cd04ec0db82355c1e8ccc592886b&oe=5EA895BB"
      ],
      Itemselected: 0,
      showModal: false
    };
  }

  itemClick() {}

  render() {
    if (this.props.show) {
      return (
        <div className="container">
          <div className="row">
            <AlbumComponents images={this.state.imageArray} />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Album;
