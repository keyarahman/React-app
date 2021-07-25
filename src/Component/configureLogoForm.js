import React, { Component, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export class configureLogoForm extends Component {
  render() {
    return (
      <div className="global-content">
        <h2 className="global-title">6. Configure your logo</h2>
        <div>
          <form>
            <div className="form-class">
              <div className="input-area">
                <h4 className="input-label">Text Line 1*</h4>
                <input className="inputText" name="name" />
              </div>

              <div className="input-area">
                <h4 className="input-label">Text Line 2 (optional)</h4>
                <input className="inputText" name="name" />
              </div>
              <div className="input-area">
                <h4 className="input-label">Text Line 2 (optional)</h4>
                <input className="inputText" name="name" />
              </div>

              <div className="input-area">
                <h4 className="input-label">Font</h4>

                <DropdownButton
                  alignRight
                  title="Select"
                  id="dropdown-menu-align-right"
                >
                  <Dropdown.Item eventKey="option-1">Arial</Dropdown.Item>
                  <Dropdown.Item eventKey="option-2">Time series</Dropdown.Item>
                  <Dropdown.Item eventKey="option-3">Italic</Dropdown.Item>
                </DropdownButton>
                {/* <h4>You selected {value}</h4> */}
              </div>
            </div>
            <div className="input-area">
              <h4 className="input-label">Text Preview</h4>
              <div className="txt-prev">
                <div className="txt-prev-inner">Preview</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default configureLogoForm;
