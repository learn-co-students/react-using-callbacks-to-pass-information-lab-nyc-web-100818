import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {
  // key of the state u want to change is nested, u have to make a copy --> spread operator
  constructor(props) {
    super(props)
    this.state = {
        color: '#fff'
    }
  }
  // write a method that takes in a single argument of a hex color string (i.e. '#fff') and sets the selected color to that
    // we r SETTING state from color --> another color
  newColor = (color) => {
    // invoking a method and passing in an object
    this.setState({
      color: color // find the key color and update only that, this color should be sent to colorSelector
    }, () => console.log("STATE IS NOW", this.state))
    // pass this function down as props to the ColorSelector below
  }

  // props r automatically inherited here.
  // state = {
  //
  // }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} newColor={this.state.color} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    console.log("props are", this.props);
    return (
      <div id="app">
        <ColorSelector newColor={this.newColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
