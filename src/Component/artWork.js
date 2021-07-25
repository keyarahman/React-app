import React, { Component } from "react";
import History from "./history";
import logo from "../assets/logoOfArtWork.jpg";


export class artWork extends Component{
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
      
          <h2 className="global-title">2. Choose artwork</h2>
          <div>
            <pre>
              {" "}
              <b>Add your</b>logo/text
            </pre>
          </div>

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
                <div>
                  {" "}
                  <pre>
                    Add a new customization       $8.95 One-Time Logo Setup Fee{" "}
                  </pre>
                </div>
                <div></div>
              </div>
            </div>
         
        </div>
        <div className="bottom-buttons">
          <button
            className="button"
            onClick={() => History.push("/ApplyMethod")}
          >
            Back a step
          </button>
          <button
            className="button btn-orange"
            onClick={() => History.push("/Application")}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default artWork;
