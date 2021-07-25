


import React, { Component } from 'react'


export class card extends Component{

    constructor(props) {
      super(props)
      this.state = {
        isCheeked: false
        
      }
    }
    handleAllChecked = (event) => {
      this.state.isCheeked = !this.state.isCheeked;
      console.log(this.state.isCheeked);
      this.setState({isCheeked: this.state.isCheeked});
    }
  render() {
    return (
      <div className="card text-center" onClick={this.handleAllChecked}>
      <div className="overflow"> 
        <img src={this.props.imageSrc} alt="image1" className="card-image-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="class-title"> {this.props.title}</h4>
        <p className="card-text text-second">(Applied to all)</p>
      </div>
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          id="checkbox"
          checked={this.state.isCheeked}
          
        ></input>
        <label class="custom-control-label" for="defaultChecked2">
        
        </label>
      </div>
     
    </div>
    )
  }
}

export default card



