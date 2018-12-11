import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    this.setState({ color: this.props.colorForCell() })
  }
  
  //convention way.
  // handleClick = () => {
  //   const newColor = this.props.colorForCell()
  //   this.setState({
  //     color: newColor
  //   })
  // }

  
  render() {
    return (
      <div className="cell" style={{ backgroundColor: this.state.color }} onClick={this.handleClick}>
      </div>
    )
  }
  
}
