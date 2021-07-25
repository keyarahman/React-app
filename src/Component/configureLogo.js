import React, { Component } from "react";
import History from "./history";

export class configureLogo extends Component {
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
        <h2 className="global-title">5. Configure your logo</h2>
        <div class="content-items flx-column">
          <input className="flx-gap" type="radio" id="upLoadLogo"  checked={this.state.isCheeked} onClick={this.handleChecked}></input>
          <h6>Upload a logo file</h6>
        </div>
        <div className="drag-drop-section">
          <div className="inner-content">
            <div className="border-content">
              <div>
                <p>Drag 'n' drop some files here, orclick to selectfiles</p>
              </div>
              <div>
                <input
                  type="file"
                  id="file-browser-input"
                  name="file-browser-input"
                  onDragOver={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div className="content-items">
          <p>
            Don't worry how it looks we will make it look great and send a proof
            before add to your products
          </p>
        </div>
        <div class="content-items flx-column">
          <input className="flx-gap" type="radio" id="Contact"  checked={!this.state.isCheeked} onClick={this.handleChecked}></input>
          <h6>Contact me for a logo </h6>
        </div>
        <div class="content-items">
          <h6>Special instraction</h6>
        </div>
        <div className="text-content">
          <textarea className="text-class"
            rows="3"
            placeholder="Please let me know if you have any special requirments"
          ></textarea>
        </div>

        <div className="bottom-buttons">
          <button
            className="button"
            onClick={() => History.push("/Application")}
          >
            Back a step
          </button>
          <button
            className="button btn-orange"
            onClick={() => History.push("/ConfigureLogoForm")}
          >
            Continue
          </button>
          </div>
      </div>
    );
  }
}

export default configureLogo;
