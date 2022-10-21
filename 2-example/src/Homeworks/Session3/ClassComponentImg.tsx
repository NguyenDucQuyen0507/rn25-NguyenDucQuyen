import React, { Component } from "react";
import Img1 from "../../assets/images/phunu.jpg";
import Img2 from "../../assets/images/tivi.jpg";
import Img3 from "../../assets/images/mechine.jpg";
type Props = {};

type State = {};

class ClassComponentImg extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeImg: 0,
    };
  }
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Img3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}
export default ClassComponentImg;
