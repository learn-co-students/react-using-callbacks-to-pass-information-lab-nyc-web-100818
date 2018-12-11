import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  passColor = () => {
    return this.state.color
  }

  getSelectedColor = (hex) => {
    console.log("before", this.state);
    this.setState({
      color: hex
    }, () => {
      console.log("after", this.state);
    })
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} passColor={this.passColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector getSelectedColor={this.getSelectedColor}/>
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
