import React from "react";
import Axios from "axios";

class FosterDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: "",
      imageArray: [],
      count: 0,
    };
  }

  componentDidMount() {
    var images = JSON.parse(this.props.foster.imageArray);
    this.setState({ currentImage: images[0] });
    this.setState({
      imageArray: images,
    });
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
            <h1 className="current-foster-hsize">
              {this.props.foster.name} (APA)
            </h1>
            <p className="current-foster-psize">
              {this.props.foster.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FosterDetails;

// [
//   "https://lh3.googleusercontent.com/Wai-CTCxPPgr8J3qR02m_B_7uI6SOCovpKcosCxqu0HQEaAEqd4sF2hE-ACE-MjPUlULTFcKo1OsQKF9LvXWzELCKoOqQHXbFUEhIhwuilRSgqgCALXGa1RJQDKfaw62e3f-LDw7gHGeeX7A_6lWHaEfdoWtD3fRYLpR8maUtjahaCFZAq0uA2yKM9s0_uEDG-oQezc0UY21LhCeJwkVJE56_wy7PSqgtDaodlZer4jjm9_5J5ReLDNY0fDC_evZQBBg_3LxAkGSPIJ6i9brstyLI-h6iCqt9Kydom4XTCFeoSKonC9aiAqtuXieUBmdUGM4sgWbyFwxjDMPLOH-7qC7iYKJdeeAPLbpXcAPGHRDP282_yxeMdr_CNoWU0xdl2N6xle7P8KRWdF3NvJqUdwB3rUXQ0Kfq0UfceTPbgNObmb58tl8Oe7n1u3_f1C0NrULxg22Q33-J7isfHdYT0sAJHZ-yW119RiNHBKklr-d8w8gMHBXjfkUEYBcN5btXJ7xknXk6_fiC2pMkVRNECdsL1RHMGTDG9s3dEzYQkdbUIMQL9U-TJFia5LtEL57WXOnMkseglVonad8mz9496ogvFe9vUvv5FJcEHL0_g9YwW0MxZu8MHZlubcjWaxFYAfqbg272Ter0u-E0S-uCVgG6WPVLqVD_cJv-zTt_sa7Sm-D3pV6aNsc6lAHQxXqQIyLPOjWJ7ru5wcZnL5JbU8Gn1_pz5__U7aGgbUNfGHf2rffkNHUuwk=w1735-h1736-no",
//   "https://lh3.googleusercontent.com/imM-whyOCkUcilOrmPZgG-xe5Gne15xSBtq90gWtkLwkMp0qOTRgscD1bEpi0qhXQyvztlOOnkxd3MKR2fXzV5ia-yVVlxnbRt_lrK2wJ6FEKZatozv1dFDSTq213Oi6RqIoQ61Oyhtj2hzesOMLShJxS9oIXtKVET3CyydnuFglbkyCdwG_u7SxoxjKqH3mHqyQFRAUaVCoHBfWW_U5qDk8bwsaWuqbIvjV4PdOZtWhQXE90bAiU9nDJrcau6xRRiAwf1n4PdGSVWyL4zQXz5BZczaYu0IeQ4If1rEqeU351xaSASopt6EQAHs4YVnEWETvNLfIeGSz041QjvYGaWo3qJ-zxlaxLJbiaauiB4rQ4Xdt9VsfH9vVMYKOimkSFGBz6sIPRyf66mzGEQ6a1pEdg3CXXgGjALDvVw30-kIiVXOFv9MFbYdunoRd2FAx_1MTSRpz31wtbLlOMpl-fFUh6TkT_VCmpRjX1ThVvff4YGShXaW1puIQYfAmrd0ke_6RiCyBfVOITCNKl1Sq3Nwr7cURUU9lAAVn-v1ExQxFx3zO5R2L2acx1oD9E-dRsVOUDrcFEOf2-zcvS0NhqzO4K9YORNqSvU_316oOD3Ws18dVFVYbMERY2rW91q1INCjfvGThGbev2Ag5cP8g69m_E8GoKs7GZLtvRTV97SWqKfLvUSx0onRIvOgjg7Yd6fvMdnoXcrfEudq-26pgvCFza71uCSPIV8Qz2ESpyizMgBuAsIl2ZFE=s1754-no",
//   "https://lh3.googleusercontent.com/6pFxp7z6tOsv7CWsU_T1Znfsb_pmApRqZ7gxt1iqE5-k7vocYTuExJdUocn_OxS-mYr6V6Rau03IIdBBLva8-AUkFvh6udSWdoTNUApO7SxKgKY9mNLbHKOS86M7cv_gHWOKaxs4pjC5OEQWp5sAR_ehEKxom2vkpPhsqfLzinbE_hxu4eV3Q91yQh26GPKFk3VK7HiSEfI71r36tv8QYu58Dxitfuf3FxKCMXHLF_FcprRM852qdpT-4ypiWCtdYS-BvdQEX8VGTQoWDbVJISd2-BmEuI4-PwJI9X4IpQQjMU8jDjlkHUM8oX6Vq4_WF5fWo547XjZT7hI8a3PnIeQsmX8Nm_fnahiS1NGc9hphVRZ7GTXF0BYINpmEa2QSm-aa7O3V5mdfysRjvQDT0RPhkXkFAXvwgWh_R4p7olWshmLIzTawfsrYITckKf85wFr9FB53B-wNxxDprKb2Zb_L0qHA3ZYZQKo6EF4a8hSRY1G_hJ0pQtfH96b9wUQN67H5VCZ4iRngjuyEeQ7-qAU1ybzNyaCRs6fGewFBA0HtGHCb2MrgtC5WryXZC9DzlK2e_Wl0XQZFFgESBNq63sTC6ot3a344COgrq579HtqvHWYSvhsHcsdEAKCCZbeDO7zYf4D-NqnTO-eyuBp3569Lfy64KQWtcHH_bDXU3hflF4kvA53cnNk5kWOlvYjaC8IO4zPQLyCiUhaGNe3F_cWmM1NW2yKbDhMN3dZlL6CThVaWUy__6lA=w1873-h1874-no",
//   "https://lh3.googleusercontent.com/95eWtFNCGbFTKoEl4zKtt_8EEqLn1HIWGQh70Gc33YLWEMJqWCxJyIwwMNulyS5a-DHWtbL1Oa1Rxdb2kiE1fihQcU9iutOy438ofyVcH2HNjNoQOPLTR6F13eSnMLV-NbISxqAOwbOOzR3UO4vcBzXMDFp6IyUpyWH3rUj9vRDlKzNDA925wGpeQe10pSF-8rDp6VSrHRxPy4QIbYcPwhe7CQ0s8SFi_iezGofauuPJotqhnLT8ltxkc-vRl74v6lVcGukeqNRsxWPOEAZrubv0tczhoyLtuFDnSjqe1-yZvE7080HQqWjLs5vFP6vWNYgSB7p3UnMDpqrY2a54ebC7p6Y4UqYunMqZ4ql69MXTF4C1tJxAr6JeRvm8erxfXje30A-ksrlPoIjfWKcvgaRHNwKmejTciL_Yn-smTs9szfxs6OaBZ19gYSLrWYrW8VsIuq70sHZ_Sfnzj6t2u6KI8NknzK-XYFmGrzeDyxP1fBldFF_XIIh49kJCvbR_jyuRAo2z_IrQJCmH6Eq7ENkjTjmTW1eUmdVEAkjikOIA296luw9FvKwJ_muMeTgqo7sOUz6Tt3fc3Q9r25N6z6xcpFrnk01k6SBf590bRn-JoXdvD3eq34aWFhLZsIZ3znuM8vQD9BECy-2OFETTDhc21FGca7DSI38VStKdwEiqhXqWwn4AU9AaLEp6RxIR9C8wD7aw4vBoj89FJ3a5s54hZ0stDxvGLMQ9kNkgdpSFoNXnPvBYwRE=w1429-h1905-no",
//   "https://lh3.googleusercontent.com/pPBc3myTGy2nZALMN_-izPG0ioubtz1JjT7e4q5lrqWUVvs1Uztt9NGur8uUD4B81kAL6slUTL_paugDIFU9cRJzfqg6iHJxAriI65CdLI0dA-CR_lTBQc1H-W3p5793dijawZAcT4nJy--yW-6apJ0AogastTo7-OtywQ3xnSgFyrOG5wwkQvabT2U0_OoK7bgjd4VWuj62ScFXSSG5Nr4eRLe3neMddEbutiVyyOfUyAwJ5R8k9SN0t6DAWypY9nMw2N5R9N6HTwIS2Qun8XEXohzzehiC4xndEUIUZeiB7fou02nDJQ3LHzjJYSqUpvZv468vsF6ro3rGWvAnUoQ1FPC3CQozb3_iD2ob14_Tp-Pvc0HViidgWF80XYiIam8ErrjXKJ6WHoETh9RTGv1Z1MW3EpRVVWoVckfH1PAD0SQqOimjB9ucIkiSWBxrk7Ilp9BVhNdpQCADlQ5mMDY90BKAts9uSZfLgDrOQi0WsnHFWcQQh8JFFD4txg-FPn30vGCOxpfdnm8Do6UGyPUd0cGswn4Lflqx4DuLJ8T_cRKPKCR8KNCGCsUZbDevVvUdXhMe6el1wwR6egXTWyGD_TTpPjS8eFzGDfUkzeeKUJXtwZzRLLzMI4yYyxKHjokLWuQlWqwlO1IvJ3Q0LUB2aiCjAuYVIldUJxZx2CoWmMoE4Fsk3-xPHmjQXdZeIhBQVh_vbxIjh4A5ZL6XznrkkQRMqkBisH19FIOL3uyxHmiq22O3QWk=w1873-h1405-no",
//   "https://lh3.googleusercontent.com/2ALgCNuUiqNBwksTzb5T9k1655JCZ44-iEdpl0VLJ0KnmWMB8Mhf4lgGvr1YOa9GwZN5IFgx7v6wQXXUiogTjZCiAVrT3Z2waedADgtq3eruMj0C3tRJHxy8yJGOaAn395CJQuV5IbEZ5R0PmbWbmeFQFy1yKGTVLC0B--lu3Yry7Eu1Io_5nvnsTVfdFV_1n1bb9vnYEtwrXB44gBwPLmhdrOh7GSLHGsRW4FS-f7NJO9V73JPzL78drzUf10LQ2WlMo3E0G2AjiWqP-o7BYs-vaV6Pc6akhBr6SUiAJJrOhmRWzjTLQ57y5_FCx_7rE8PmriHYjEgB3kv-XqcbjVulaKWmeq2r4pNX3mybixdSMisX1Jj_8sxpMxnePuElOM8_JX9GGbK7e3kxc3YDewVahBrrAFCuf3qqGH28CR2HlZ45CPnT440up-1cXUS2a6EhhYJFhv7VN2txTNTo6IwacOR-bklzYivLDJTdarvNCdrF_IpAkUGQrt6n8DCSRxFCU8u-GqS9nNXBoeB4oydD23amHRf2jyn6wKWFDOsYGpETeOir6A8FCGHVD-lGdaLL7_EEUSANLIAu3xrtx9pTmU-zC_S810zf-1WSFy2Okz8bCbVVkldi-Jp3AKkndveFFlwVHIzl_UrynpJUo9djLhb_LYfRtNA6SEe38tEiLxAizZ_anYdYzQOT0HtHkfjLED2qJtjPbY9dyRuZ85cE3CQIPFsLh2OeN-J_s8fdIt4BfgNIzzU=s1873-no",
//   "https://lh3.googleusercontent.com/bcof3bQHoZZ5TKQH_FQp12AAestTy1_e1uqvC4TWcK6MmvszdlmGqSLAAA0XhOi5lBiSAl378wDCioG3xQVEdwLdjF7WtmrRe8mnGJEc7bAXQeXaVnZW-x1oGfZ65HpygwBkA6MeaBT4CUQEp83s5mepII8q6GPg66G0h8L78ZUt0qefa83Lw1BHwxWPbRraQugCxGHPxexEI7W4wlDgigFyHpJzUf5lJv2aWN1r4UD3U7Xa-21pU10VhgpoUja2bL0FjkOnC0X4uFBV9wh-p6gQb2qzMo4xVmhUKEechJMJej8ZQH8PvWZbPEU2R1BgNFzvCCn_G0Y2wonnchskseoOcYVV_UBeFwa5TgADQaUdagaopMk8hp5bvqV6Bxffg9Jbvf47wl8-PMXDZyM3VCkfZ2x745x3s6dfix4hd5f_f4NwhaPZTTnpFqlp_WwN6uFdtUuc16C7vE8oPynClNInaWI-7gRKYZJJuIcd7g5989GZQHS5g5NYUaseec5QAE-arrzr4CpBv8cab93H-nGLkEWI_RUFYbAuh8ExNj8--LANruLso4T9MTujcEdQT3FyF4aw3vYC5xt-mSYY2xMAB8vRNzVgmAEM4QX-aekPS_-r6eHI_2ueQtUVyKBU3LeCukQxm7CmTsP2Jp4wjbz0FSHvhBJSBuCpe6AfsugGArtVfwBguJV_o_jLpOaNnCwoonlw7lkf02cPzE5gCEoaJWmQyMSN8roJ3D0aOdbuMziRRZ-s7Cc=w1429-h1905-no",
//   "https://lh3.googleusercontent.com/KIwAW5VuPuAEWycCkTxHdKjuEDXPxDesL95J25YAwdh83HhQDa2SpxPQESlZnKu6VAUG6j1ibVqby0SwQEgTNRuHYTeNCWlq6kCrt-_cRvhS2Le2eTMp5gGdPJjfu7Osw0_ZL0oXaSFKGWs5clTikBuTBD8blzTwLM0_svCVAT9pnkpgId7I_Tq71Ff54LUy4E--UtpFdpbUEgDWn4VImRflzCOEIwkwhKTN91PtYtpZ9aXVemvbOHNolWW6zi8gXs62yLEta2mt7oEjHQkqHaMUM1ZmNgnXzXHqqJuWpS6e4PhbltnzOGya8S5CtEWDAWC5R2XrqMf1clFP5hTBNpfMqS4XMk5mUqijWi0zz4Dh272UsjImGwcMpTiup7CXcMnVeBHngX3BJfw1-T2o0DZ4ngnvxPhT1eeafzWEzeTdxI2oSYfSqWjP1m9M78_uh7obricdtIII3_bXuMKe7_jcrPZAaYz6jE16clHAkGwh6XXju9_SxpI7nqZsck2-Sbe4xQl2UOdqJFSJx0A0ZredusHPcEU2VWVjsrsMYBu5EF-sYYeUg8fL3GnU4z6_8hiJCoOhMXUXwt091TihSLK2cJxFqOYWYcxwqc_-he8wHMNBXDlaRgW2R5up7--3eloPMASaaA1jY0vI-1aqxlhdL3oyIqhvd75bvm3ZOzUc8ftMB1rF3pfE-m8tkAvtHj2k1w3C22KV5EZ1WWgzKwPlp8XkkWWjBVWMXnN_n1nPLEqCqHfcFQ4=w1073-h1905-no",
//   "https://lh3.googleusercontent.com/JwQn976HPoBoHgSxJR_pSpzgs55CurFqnIP7VStqkTdVavamdU1IlIJEaVtWWa73AAbIBIUv8oRuDRiBzciYZCtEeSs-7AMy0jRid7RE3NuX6aw16C4fMCF4CBaB_AqVArSBf26C_SFt0u3ch7-Dw3XEeaVUIC94t3HNP1z1NbhkL17pl9-QtvlCa22Qv7Bfnk0jowQ8azD90x_ebqJtPHxbbCY4VjyrD5phAXtePY-avjUHvLfnGVejSzcBIxMBvtBkTh1Yjcn7EKXwl3YvML7A6OUfsyOfjiYBUs9QcMyUBJk5XNSMj4nJJNICJCYEsg8Ey2OYj5wEuoIXA77t3lCOuK2SEbhu8PX5vD5_4f-zkeftwAhGgybs6yDEm3AAfiDRO6fGHdQjfDKoSFuaDLqspNsVGPoRlZllqUvqrmrC47AvbHdEmtN8GOIYC69bsGikGfxq41TMSwZF47ZhmKZOgOLF_IrcJq6TJmmtCVvIWNWzy-eKvFK8t_N10Q2Icegz6QnrAJvv4QXFW_7eOV9amjgxfC-VM8IT9oz_EOJx5Yzr83-U7MuPKEu60DyqfTYD0yVd0u2YIYP99r2H75lQYLqVmb0Vsrsxych4CFlD-eibfgzt4s5q5gIgo0TdizDSt4RCxj6utw-Fje1pzUv-ETh3adDbj4aYooRmvDmtsjXOjQYs_jY8fC2MPzg5TCKl_R_Qc9XVpxkUmEulS0GssX6rdCD-XmsUuRahb5-Cnw9RQ-s4HWY=w1429-h1905-no",
// ];
