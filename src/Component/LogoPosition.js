import React, { Component } from "react";
import Card from "./card";
import img1 from "../assets/pic1.jpg";
import img2 from "../assets/pic2.jpg";
import img3 from "../assets/pic3.jpg";
import img4 from "../assets/pic4.png";
import img5 from "../assets/pic5.png";
import img6 from "../assets/pic6.png";

import History from "./history";

export class LogoPosition extends Component {
  render() {
    return (
      <div className="global-content">
        <h2 className="global-title">1. Choose positions</h2>
        <div classname="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <Card imageSrc={img1} title="Left Breast" />
            </div>
            <div className="col-md-4">
              <Card imageSrc={img2} title="Right Breast" />
            </div>
            <div className="col-md-4">
              <Card imageSrc={img3} title="Left Sleeve" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Card imageSrc={img4} title="Right Sleeve" />
            </div>
            <div className="col-md-4">
              <Card imageSrc={img5} title="Big Back" />
            </div>
            <div className="col-md-4">
              <Card imageSrc={img6} title="Nape Of Nack " />
            </div>
          </div>
        </div>

        <div className="bottom-button">
          <button
            className="button btn-orange"
            onClick={() => History.push("/ApplyMethod")}
          >
            {" "}
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default LogoPosition;
