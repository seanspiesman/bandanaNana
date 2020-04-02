import React from "react";

const Materials = ({ show }) => {
  if (show) {
    return (
      <div>
        {" "}
        <div className="material-image">
          {/* <img
            className="all-images"
            src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/69607568_10156226606220966_870509318787563520_n.jpg?_nc_cat=104&_nc_sid=0be424&_nc_oc=AQn_aqjJdRCKdnAtLE6k2cBFfSGE6G4k9Us0qQvTNMcJ22YW39YdkWRoM7S9TWa9f14&_nc_ht=scontent-dfw5-2.xx&oh=9b3aa497162048adb99896c6aa55b46f&oe=5EA7072B"
          /> */}
          <img src="https://lh3.googleusercontent.com/s5_Pu7M1iwb_jEbUPbWJxzdx_hLcHClwbfublSNN1cC-sDu5yrxbLzaqPDQJWdwFhfakD7QWR4rmTu2qSs5YdLcPXQ_SqKDSnIhPZ5E-f7ZpBvpadATawKQdJk1cfYCfFaYc3n67q_EOiRS59EfCIkdgCGHrgKgL-9TDYR2i8B2iyA2aAzQRX_MZmJsj4u06z_zlSivTxdeUVwpdk7_9NeOi17XJNZTGpHcKt5Uei-jDGWEdIh5Yz849i1Y_fl0m6oiEvwdhqfSSyms8qggZ3d2pR0fs6nqqRz6VxPK5kPFZHStyrDjfhIearBoZ-l_91m_7j0LuH-bRbmOyNyCCMTboQNd85m3WYfruPpIX46-hkZ8h8FQ5ZtuNUPKNdmY-jbVFTpqyMgclTe4azReaIcp4bi8I6dkMy_2P0mGCJnEd-YdbPXSeJa0djIGLIXOiNku7CSndMDrEspeuZPqcyv1PSeMqCOsZuiAgb0YPQuxgMEKcy146uP3NG2w3vyVVT_g6XZFsuOaw81LH6PLhVcas9-8UXV7lCUsv7n7qKnjilgdaTqXdMNm0jCsHUX7WqqbvxTaA6VBU9NhuvhRd-bxdh6z5YMAwRb1gNWW6cvtaeqRK2YLkIxv2RShfcqHQBbQfmsjOejaolW9MYGGClB7-L5xY22xUKOw8Knfu_Fisbb7_KSxXElGt1y9OL_WNnrf_mzRPOZHhL4UfcQ8-uecXDSbLxNZ6tlU_5FNFcSOKlCBBCfNq5Zk=s1080-no" />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Materials;
