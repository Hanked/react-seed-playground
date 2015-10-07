import React from 'react';

let { Component, PropTypes } = React;

export default class Dash extends Component {
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return (
      <div>
        <h2>Dash</h2>
        {this.props.children}
      </div>
    )
  }
}
