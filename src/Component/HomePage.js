import React, { Component } from "react";
import shirt from "../assets/Tshirt.jpg";
import History from "./history";

export class HomePage extends Component {
  render() {
    return (
      <div className="global-content flex-content ">
        <div className="box-content">
          <div>
            <div class="demo-image">
              <img src={shirt} alt="image1" />
            </div>
            <div className="bottom-buttons">
              <button
                className="button btn-orange"
                onClick={() => History.push("/LogoPosition")}
              >
                Add your logo now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
