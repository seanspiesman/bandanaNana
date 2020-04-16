import React from "react";
import Axios from "axios";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: "",
      imageArray: [],
      count: 0,
    };
  }

  componentDidMount() {
    var images = JSON.parse(this.props.details.imageArray);
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
            <h1 className="current-foster-hsize">{this.props.details.name}</h1>
            <p className="current-foster-psize">
              {this.props.details.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;

[
  "https://lh3.googleusercontent.com/XzrZ9aTrH6E13kTpIbyrEtoy3U-1NB2u0oCF4EF-Jkn0QDJ_ea7CRA26GZXq4bvRMDcrKU1_CxAmrf0BW2f2j9jYqqpzZGg2-1YTG96q_UtXuL_U1vd0g8ZGnTVYOCwuJmZ1KEG8npfVu4RY4EuxisHlcjMOhy8s1Mzu8KM6gSeB8AXK8_TCT2kYR_kYiGfy_fXyn3ekgBoDOnvBLI1kPME3RL1zrcJS5fE_v1EyTkN3L_Ii8IoMozGCanQwKcdah9w4CrWQah-tat0ZSe8dZlA5JaM0TKmpj6HnCCVhlKRz98iZCmmdfihxN0fONelFoJ8X-jNwzFY-PvbaWAFrRJgKxOvEhqrw8eQhkQfLkCLk22G_YNH6UjaEUABmYy_HfdItjySeCRugF-GoyQ_Yd4s90MSVaphTcBIGnQrlWuOprS0yA7o5OVMJ4IVRrVC5AffH_QyYOMXs0l007DFWSD9IUBAefdjuGzQVu8EqXYddeXHBImObUfXOVt0ovINVZKbXjD9ieZ2qpK9J9vRZ2wSxcY46eTulQVfrUf8qdhCrQu0TXvRucAcRD1co0FTNVg3r-SkVW1ErMF3_p-FbriVkTCAlkcCk3SZC_dS9orRY4h43GKUkQEsYFIVXYUOtSb2uhhgU5fW7LKC_eUq20u3UMfedgDwk_uJvh0bOOmGv-5zUVlGKyUvOjSpUOqLlSOj5tvjQqXUvEMWBQ4nsw8PvOulDBSCyEEXqeabfeQ9mv-i-w-Xkxxk=w983-h1630-no",
  "https://lh3.googleusercontent.com/YEeI2Hft8x8aybrhVyft834GDOeg5danVyBcj87-UEoZyCYgBOinp5ryKBT2UCG-G94I59I3L0Ps130QKRVfdF6hNzhO6v0BTbgBZtH4NIAVO5xQa42jXdauJ0nCjfBQPW8jiDvGZP5tWFJw9-pxu-2B2bPo8lwUQn12T3fKgYZbs57K8ozXSDWYZ0Zmu5DKPywvgttCgJxRlZa8wAjjnYie8lQ82Zw-PXhdRMd9Bjwc0iXLEK5P8rP3iloHL3L6WJ3aLciLKRB1YNbr8YdHIhpCIKvpGTVYD9_Li4UH4UH8E7-TZx1SA1nHYv_ROQFG8I9ADgAqW9zmz1RzS5mNJGyoAUQNVHO3VXU8khuFz7INT5dvf5M-ja_pazWWO0l3JyovZHnxYeP39BdxyxrB6XcGND4UKRE3TQfUA1uDStIJRrovf4kl06Oq6gxMVrn1uskevgBXRb-OmKU-g17LzoGKWoSAHjl7vc8xfGakvDCu7GDslAViWFMJk7cdQTBSKy9t2kaM_COrhMC9gqYV6AAh4FDDNG2iGMJaEwXLQTPFi1_X8gUeM3cUv7xIa9h04ff2wSqri-UWmKiB5nrUUyfqGqizuIjahQUzk37TqKZ5uYLdBUDH5nPfxf4PNDosz-uTwTHfXIDq6g9qg_7oSLsu5bT-AOgAqBjxE7rZ0erPiFX3Xuh5e2j2lUFR7NcuRaQYmgHNp8tN-augOYJddySAd0p_bxjbH36fsRvW5bzMslueP546Td8=w1429-h1905-no",
  "https://lh3.googleusercontent.com/OFZ6bSZqnmDgMJauEza6_lpws0szboQV4yzd66krbVASkbHL-_TnhT16HeyEkdAqBu0CUXs1Jx-tHhtSfyJHm_2dAGQ5qqO9Xm48-6K6k9vlyS5TeRnfE3LlpDyVQPjrsJPrdtG5p1zBdo-Wzt-rDdD4-O4ubu58VhuhLonSTAuMWacuf4cI7hiX_iVMXn_0GfK9TfgnJSTef2cwt6Gx9_46aZUks1feOase1uGG3fXmlDohHOG88Fa3w4JFAv516LpQsL6Yld0lf5m7_H9yQLhZ12EVtIfkJf4FeUibp06Oa2hssO4y2ynI05XvUbAQlUmw4BVKQ7wUzeIjT3a05DFiOHCLaYSrn1grH-QFuoCnQf9CEI5OXQZyUNXKlItgMHeux-PtJ-aqxw15EftxgYdpGqBK4oroITopuzutXry1JtgIXhxpEJQAUShbkb3yMkZctgy0eKzOdJWVLNdtLvKz5BxmpZ11kI4Hd3FgrdM3ra_L28LF_0lww9ALnvi0axLixs6ShpXdSxRJvlxIawsK4EnSD85iXE74JKxZtH7TZxfaAXCTegd4BcRpFcm96CAHfZ_cGY94UvubEMx7dDLY12ywC1X9xWW8lzxriMzYvlgbrEm0kiujEVg31-VhboRhdld2VfzA-fXRz3FCoLu82L_Mz7DMcJGWtbmilD0-BqCs_W9FUSSNSoE4a13XeSqmfaH3ngqGEcxRBABwKuD7-wXMWBZPeAG_Xqq0Q7K-I6EMjpi_NvQ=s1630-no",
  "https://lh3.googleusercontent.com/rxEIRp61ciYjkrP9OTQvGJRVeQ2ZHFZHWzzq3esN29UXxGlIjKihVJ0PDcAWsKDZK7gknviyGiJEbXCB5ytl41FGOAx_OBaSRqDUt7W8o3IvvYpzfPqci8GiHSV7Qf443b2XcdjlKHj8S25aYPZXuDJieXU7cuYvWMaFO67IF9qs2yWzckdDMV544U1qP1ygXIkQTBaMikHGbqzQmDG1fSoyUyB51wm3P_IEtx-GiUUuxdqTYSYt9FshA3Co8tn4ZQ-108wpgjidHiCgOHPgXLqn24s9o0kYbnjqKND_kRXnioVbd64ml8DK1wuYgXSrSI818JNR1B3ZuKz5yByNODn7qy9JmBC3c4-8G63PCQC8QR-MzYVZ1SkzJ8w6AwemapeIAVfEr0CW-yBcQLb4GOL44aUjD6vIFhl2JdKZLfCZY-SdLS7hZR6mGegZ2wjqOfRT4nHWdO5Ps4_-KQP-p3IVsETDv2YiTu_-Lp5WjNNypQQqA0_0erOrn_f1dOvDwQJwRi4grCL8UCHbACmrbrfmPTi4NriwimFhV7O1V3Ct6QclwFXby5bJlqZpPyv8XYyms-zPaZOuXATrKo6XXvRzuraAUSktX0YhG17CUaj9OzBsNQgtdgibfaQoNXW8xC-N_u5d5pVbloBNS5nuM_0CK7jIPF8AFBXjOidEL3qz9NBkgIkEY7hrNikguDSNjzwvpFqCAGyTjmh0oOHlKSayZ444nEYHPKzg_4DLh585kixOi6-9rwI=w1874-h1407-no",
  "https://lh3.googleusercontent.com/kTfgfgiDw-ZUsVg-XyoR6CW0VE9iNNIwDb1JWyPUxxX9nZRj6aZmS1iGqb3mvQy_08NPNlC0Jx3nvHV9JgKSFQ4nhHfs7CWaze0RqQszCuikKVjfTMNecf5KLSOPIxQ66SR26jjDijgGTFnmaZlladYJKGvTa2VqDcrQueNl6A7bh6F8R50EWUjytWKLIo8sgsydfJ6nsBz6mvuABy3dvXFsdIAnRtWFxnHjZ4f1Va71_gy3cRK5-VeWgcpGhncu0Ien1jQw69F2Qw-rhxuFyKJczltByly9BIRedXS2gEpVG5CnAoe7pmfqV_0p0Ojegq6N49swOSAGfNgcAMvjLH0Tcb2W15axehmD6F-KF1QP0xcvOB6KAU80ciXW4WfunQXbRslPuu1M0jab2__EMDgVRa4T63w0ESdju8ou3DExZCwcRDc2XpoGC56bOi8zUMOQQ-9_rkhXqwgfbYmizfwguuoz6vF2ncBFh6WNnSYHNyJWDOVWw71zC9ozvkLV_SIkh34uKG1BCzyQinf0JT-VviTH_4aYqJ-BZMyZaA-OSPRRWygmcDJIbMlTNhfHJS6c9U8y2gT-F6gmwwNuT9vytCueujGoFvo4QvSMl_kACydBQAvz68B4SCO34b-x1ykZoA2l_i17ZfWHgXj8MxPeUsaD1ASFhbR0bqESkFXvm8X5xWIpqzOYYG6lREHYsqh4cjYtupTVx8tO_1TOcEhm1rl_8IGn9HbzX2dl3xN7_vTEgRkOmN4=w1874-h1407-no",
];
