import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} data-name={str} className="color-swatch" style={{backgroundColor: str}} onClick={this.changeColor} />
    })
  )

  changeColor = (event) => {
    this.props.setSelectedColor(event.target.dataset.name)

  }

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
