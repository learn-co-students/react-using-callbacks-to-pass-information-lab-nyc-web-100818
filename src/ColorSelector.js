import React, { Component } from 'react';

export default class ColorSelector extends Component {

  // handleChange = event => {
  //   this.setState({selectedColor: event.target.value})
  // }


  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} onClick={() => this.props.getSelectedColor(str)}/>
    })
  )

  onClick = () => {
  {this.makeColorSwatches}
}

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
