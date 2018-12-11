import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedColor: this.props.color
    }
  }


  handleClick = (event) => {
    this.setState({
      selectedColor: this.props.passColor()
    })
  }



  render() {
    return (
      <div
      className="cell"
      style={{backgroundColor: this.state.selectedColor}}
      onClick={this.handleClick}
      >
      </div>
    )
  }

}
