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
    Axios.get("/creatorinfo")
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

[
  "https://lh3.googleusercontent.com/Kl0_7mEeVaEU63ki9RZ4_ENaMK50nkDh7LJfyFmkqyUWnBP3ZLRHvq3ak1LtZbdlBpVV3OL98KXNYflVS140NyvpSJ_dIXH8TmSUxMh2I8ukUA8IvEnGEtE-uA7ApijNyw9v7j3xpNGGaOoWYJh8BxUfrR-okrFWKlOHiIXhYFOOzBtkU4pxH9plLlgzHbQNKN9dh2wLtK9OYIH7Rfz_OE_0KFV5PnsIduXF6TQnRgvVhC9QhsKL7vd-mj2WqnBoz8AK2Dtr7JnD2ToInC52tbDvUBljD0xXKN8EUolPV_klLQM06l_oybyIpqnwA41EnCicKpBl_BdOWR1r0WaywFoh25clBv37dN-IHzgKgKgWnYMfNaFsIRSv5Rnu92NaF4v12IFXicLi4cSy5PLW_fc1uYD45uZX83YGlxw-eAobAHD34j93O3TSnOExlHA2w7Shts9cFGC4w1AyTG4SBQ6tRwsy_HL4llsJACP7j_IIHawm5cIPzjjd26IPO8OmrbticcAk37fdyg4sTQU-ezc2XWBUo-idrknrbwKd70Yos6yWSlXUFJ9YI_kfxSNHY7sxppDIshu-hIqijAa5i6hR0q0Z6akW9E2TTOY94Urn40WF6wN2k6qRUQoRZhVVOL8FVp0C4fGDtFLhj-ZBpg2PdNt0e9kqE8ZNLAUH3AY8avYgtrRuSkDOxH-9qddb48Xt0SSRpW3U42UCY0K5M6Z3u2ibMMBou__-3kLnN5GW2QX7yakLTX8=w1429-h1905-no",
  "https://lh3.googleusercontent.com/MyL8pIPaWk2B3__bTfwoqmUBHTr-Brfmm-Ivhj4IU2TJF2JtfZ1raFhrGTKBb6A319vj-3-G8QN-A1cM-FTSxM9Jo63ALXq_OFLm1RvK6_iEZwfZOBv2qDReBE37J435tTg-yqvSD4Ohi8Xd6MAmCL3Qrjw9db1df3WiA7K8igO2RGVdiqSpXCAMhVOOnADi8vzFxvvjwTSB5cW_JFvyUFkG4FI3qCu_A8L5D3mUxRHfSEhBtTiYmoX3m2WN8wNr54d4P4bdns0Z7AxXtj-wZFT4YXJs8WqugJcJtIFdVhzOMYA9haXAQvXBouQoXH5Oy5Ommt-LtPR6uQcqVd7b2r6olhGebFeDW3AnjaBNnPj8IhqOZ_jCC7ujKBonlIV2HwJRzP89cHQehjk2aWQtfIUhiGAbvcnQ8zOfyryF2NPFcObQndnivB5nxDtkcVmpXSKgducEqKLiPPfstjXeIZAH0AYamxmWYUpzmobVUwn8iMfkw1ZO3-gfksX46hAO0KVZweO9nOztXToHAUffx_LqhGW3-hEKgyyPIqlodWOqvDsI2MMgbNFHY2EIufPISxz7Z78MJSPCzss9OE03TUc0nsufF-VuID9FsLylacXvstr8CHR03aUUHfLWMNYmtOA105xC1bBS5HDCwIb3nvPabADCsJ7lTdcAhZyeZxJc5WCtuWAc-MPJYlXsekxxm_1WhtGgALh1vGGlubBhf_bQfppI9Mrx5JghWDgGIO8lAEvPhVjwZ9c=w1429-h1905-no",
  "https://lh3.googleusercontent.com/duUsVTX19_9ZdtxuDWrSIod5JKO-500GMXGpIZ8K7EygOMrdzyC4xXa54C1n86T_eX5AWy8vcARgH9SYIU9xUCrdWvH_RiyUJbNoo-aJeOECfwLjsGIeKJCpow6-qy-bnrSd13TTebpzRwimVJf2hxLBKWlEM3lXU0CYV0JpQCXruyTp2VMu_xnXU6jJbGv5VfTLv7S0eSzNR9FWmLJaTWR_rZiffITvAWBwqdCyHfvTpMr_V_ziAo0nc-x8v8W5jC3VMd95GKZCOIzsy7W1KFuABQ7YqPqXLbcv6g-F3e-qbdkH400bTWwsSJIChRPWI44TO4lz86mmaUV_oQTrxy2e_J9ZXongXoMrebM1ynX18Vax-CBRb4dBcTofIDOWBMbnqjan7xDCvdciUCpkZ2Gh2c9Owsvplcf_nRNPq4FElk-O4eTCLT8R9kujku7W4oBfqUjFjvFytxhAQTj2mdFhWCrVKG4_16TITayke-8zZgHQtxUa-iWEzkvTBGISno7zHc1FXqodoH5De1QT_Y0tsa8rPC7JtIgB-vbEahFbBWXXyVEJjHo6gPfJ7Oh9yYnbSgaG5Rchadl7jbwnoftCmDb6PjxKW65Tp7mMYCU5Hljguj9eP-PnnxWUkEHJT_h4BndJnzBMc9y_r-qdkyJGpJBU1dDphMRYpcFLnuM5zTWDJIhEWvMHpNzPf_EB9ZFK2RjHQHtZNc1Kxha1YzK0Rifvku26_6sGebH6LFot37Xu7sTbUl0=w479-h359-no",
  "https://lh3.googleusercontent.com/nIjL_W170k9wfl1JdoryjjtfENR0DrxVIgMvl54GIwwQHnaymRlLaRliMqG6kwkd6RkZEWUaEHFYg1ZejePfze2YsuIQEY3z_rMxBNzSSndhZBQX2ZwhGLjmOOcSdipKk89GrXamil9y-U7VJMYtcpXqA3aGpeP5ZY80kpfTtQF32_hP7CA1B3SBOw7DPHUpePOuExbb-Ckp-8ALcR16d1BE8rUx9Znr6leZC6GNebPM5xmtpMD2aK8Xgo36DHsWRrkAj6TeeHi39Q21aTZz9xFj4DpxUN-FC0WejKdnuSVRZvofSRfNqvRX_h8C9uTui6IT_ZuCtoZVBj_qjNmHVHNcf5oVM_FdJYGR_-0fNUurDvappPRV6MqZeCCbiGf2sngItvVZgMPv_p_f_Jd55NHpi_87AnHee3_HOVFN-iH5OvnVMjh0XM234n77A-JGMu4ue0oAD4U259TwiTNaOGmP7l10yVT0J3s4Jxu-sVIVhMplo-iWUO0X1X4wRyObpHPnPQNDblVX7ATKKzBMj17qlvhtv-7Qb1PhbDSZ8JQIywrr-eeuP8noXO6LIsnFnl104kg8BAlN7ayQ6L8fZW1pncqdmB-Yvmq8S0u7zibi0ze5nmu88fYjNrFGws5-y1jCjUTArATWdhQV383ZpwOGPzdeZewTEQ9FqFOd3I3KQjsdo_Ejg50nWqyjq9YvjyMDYy8fzumpcTluZ1Qo1XidN5gIuImWXHbH53Qg8BD8fM-WHKW5ya4=w237-h316-no",
];
