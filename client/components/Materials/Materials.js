import React from "react";
import { render } from "react-dom";

class Materials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.show) {
      return (
        <div className="row">
          <div className="col-md-6 material-border">
            <div material-img>
              <img
                className="material-img"
                src="https://lh3.googleusercontent.com/s5_Pu7M1iwb_jEbUPbWJxzdx_hLcHClwbfublSNN1cC-sDu5yrxbLzaqPDQJWdwFhfakD7QWR4rmTu2qSs5YdLcPXQ_SqKDSnIhPZ5E-f7ZpBvpadATawKQdJk1cfYCfFaYc3n67q_EOiRS59EfCIkdgCGHrgKgL-9TDYR2i8B2iyA2aAzQRX_MZmJsj4u06z_zlSivTxdeUVwpdk7_9NeOi17XJNZTGpHcKt5Uei-jDGWEdIh5Yz849i1Y_fl0m6oiEvwdhqfSSyms8qggZ3d2pR0fs6nqqRz6VxPK5kPFZHStyrDjfhIearBoZ-l_91m_7j0LuH-bRbmOyNyCCMTboQNd85m3WYfruPpIX46-hkZ8h8FQ5ZtuNUPKNdmY-jbVFTpqyMgclTe4azReaIcp4bi8I6dkMy_2P0mGCJnEd-YdbPXSeJa0djIGLIXOiNku7CSndMDrEspeuZPqcyv1PSeMqCOsZuiAgb0YPQuxgMEKcy146uP3NG2w3vyVVT_g6XZFsuOaw81LH6PLhVcas9-8UXV7lCUsv7n7qKnjilgdaTqXdMNm0jCsHUX7WqqbvxTaA6VBU9NhuvhRd-bxdh6z5YMAwRb1gNWW6cvtaeqRK2YLkIxv2RShfcqHQBbQfmsjOejaolW9MYGGClB7-L5xY22xUKOw8Knfu_Fisbb7_KSxXElGt1y9OL_WNnrf_mzRPOZHhL4UfcQ8-uecXDSbLxNZ6tlU_5FNFcSOKlCBBCfNq5Zk=s1080-no"
              />
            </div>
          </div>
          <div className="col-md-6">test</div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Materials;
