import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: null
    }
  }

  updateColor = (hex) => {
    this.setState(
      { selectedColor: hex }
    )
  }

  colorPass = () => this.state.selectedColor

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} fn={this.colorPass} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector updateFn={this.updateColor} />
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
