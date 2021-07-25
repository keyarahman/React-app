import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";


import { dark } from "@material-ui/core/styles/createPalette";
import LogoPosition from "./LogoPosition";
import History from "./history";
import img7 from "../assets/pic7.jpg";
import img8 from "../assets/pic8.jpg";


export class ApplyMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheeked: false,
    };
  }
  handleChecked = (event) => {
    this.state.isCheeked = !this.state.isCheeked;
    this.setState({ isCheeked: this.state.isCheeked });
  };

  render() {
    return (
      <div className="global-content">
        <h2 className="global-title">2. Choose method</h2>

        <div class="grid" onClick={this.handleChecked}>
          <div
            class={
              this.state.isCheeked ? "content content-selected" : "content"
            }
          >
            <div class="content-items">
              <input
                type="radio"
                id="id1"
                checked={this.state.isCheeked}
              ></input>
            </div>
            <div class="content-items">
              <img src={img7} alt="image1" />
            </div>
            <div class="content-items">
              <h2>Embroidery (Stiching)</h2>
              <div>Detailed and durable ideal for uniforms</div>
            </div>
          </div>
        </div>
        <div class="grid" onClick={this.handleChecked}>
          <div
            class={
              !this.state.isCheeked ? "content content-selected" : "content"
            }
          >
            <div class="content-items">
              <input
                type="radio"
                id="id2"
                checked={!this.state.isCheeked}
              ></input>
            </div>
            <div class="content-items">
              <img src={img8} alt="image1" />
            </div>
            <div class="content-items">
              <h2>Print</h2>
              <div>Vivid and flexible ideal for general use</div>
            </div>
          </div>
        </div>
        <div className="bottom-buttons">
          <button
            className="button"
            onClick={() => History.push("/LogoPosition")}
          >
            Back a step
          </button>
          <button
            className="button btn-orange"
            onClick={() => History.push("/ArtWork")}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default ApplyMethod;
