import React, { Component } from 'react';

export default class ColorSelector extends Component {

  handleClick = (event, str) => {
    console.log('u clicked me');
    // debugger
    // let str = event.target.style.backgroundColor
    this.props.newColor(str) // want it to run the function we got in the props!!!!!!!!!!!! thanks minhee
  }

  // makes the colored squares
  // want to listen for click on one of these colored squares
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} onClick={(event) => this.handleClick(event, str)}/>
      // alternatively can write onClick={() => this.props.newColor()}
      // always need this if it's a class and it's defined as a property but if it's function u cannot put this bc there's no reference to this
    })
  )
  // how do we know WHICH color we picked?
    // event.target.style.backgroundColor

  // HOW DO WE TELL CELL WHAT COLOR WE PICKED?
    //

  render() {
    console.log("props inside colorselector", this.props);
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
