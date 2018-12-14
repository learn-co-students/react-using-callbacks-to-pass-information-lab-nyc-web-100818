import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    const colorToChange = this.props.clickCell()
    this.setState({
      color: colorToChange
    })
  }

  render() {
    return (
      <div onClick={this.handleClick} className="cell" style={{ backgroundColor: this.state.color }}>
      </div>
    )
  }

}