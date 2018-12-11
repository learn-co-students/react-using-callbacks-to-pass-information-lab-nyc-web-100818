import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeColor: ''
    }
  }

  //get color state 

  getActiveColor = () => {
    return this.state.activeColor
  }

  //change active color
  setActiveColor = (color) => {
    this.setState({ activeColor: color})
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getActiveColor={this.getActiveColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )
  
  logVals = () => {
    console.log(this.props.values)
  }

  render() {
    return (
      <div id="app">
        <ColorSelector setActiveColor={this.setActiveColor}/>
        <div id="matrix">
          {this.genMatrix()}
          {this.logVals()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
