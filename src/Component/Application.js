import React, { Component } from "react";
import History from "./history";
import logo from "../assets/logo.jpg";
import text from "../assets/text.jpg";


export class Application extends Component {
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
        <h2 className="global-title">2. Choose application type</h2>

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
              <img src={logo} alt="image1" />
            </div>
            <div class="content-items">

              <div>Logo</div>
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
              <img src={text} alt="image1" />
            </div>
            <div class="content-items">

              <div>Text</div>
            </div>
          </div>
        </div>
        <div className="bottom-buttons">
          <button className="button" onClick={() => History.push("/ArtWork")}>
            Back a step
          </button>
          <button
            className="button btn-orange"
            onClick={() => History.push("/ConfigureLogo")}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default Application;
