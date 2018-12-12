import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    // console.log(props);
    this.state = {
      color: this.props.color
    }
  }

  // force a re render of this particular cell
  changeColor = () => {
    this.setState({
      color: this.props.newColor
    })
  }


  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onMouseOver={this.changeColor}>
      </div>
    )
  }

}
// {backgroundColor: this.props.color} to just make the whole page change color
